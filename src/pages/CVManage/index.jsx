import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { FaUsers } from "react-icons/fa6";
import {
  CVContainer,
  CVHeader,
  CVTable,
  ModalBody,
  ModalFoot,
  ModalHead,
  customStyles,
} from "./styled";
import { IoEyeOutline, IoTrashOutline } from "react-icons/io5";
import { getJobsCompany, updateJob } from "../../services/jobService";
import { getUserDetail } from "../../services/userService";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import DeleteCV from "./DeleteCV";
import { Bounce, ToastContainer, toast } from "react-toastify";

const CVManage = () => {
  const [CVs, setCVs] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [reload, setReload] = useState(false);
  const [viewDetail, setViewDetail] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const idCompany = +getCookie("idCompany");
  const navigate = useNavigate();

  useEffect(() => {
    if (idCompany) {
      const fetchData = async () => {
        try {
          const response = await getJobsCompany(idCompany);
          if (response) {
            setJobs(response);
            const allCV = response
              .map((job) => job.cv)
              .flat()
              .filter((cv) => cv);

            const CVwithUser = await Promise.all(
              allCV.map(async (cv) => {
                const userDetail = await getUserDetail(cv.idUser);
                return { ...cv, user: { ...userDetail } };
              })
            );
            const CVsoon = CVwithUser.sort(
              (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );

            setCVs(CVsoon);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    } else {
      navigate("/admin/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCompany, reload]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

  const handleViewDetail = async (obj) => {
    openModal();
    setViewDetail(obj);
    const CVsJob = jobs
      .map((job) => job.cv)
      .flat()
      .filter((cv) => cv.idJob === obj.idJob);
    const currentUser = CVsJob.find((cv) => cv.idCV === obj.idCV);
    currentUser.statusRead = true;
    const options = {
      cv: CVsJob,
    };
    const response = await updateJob(options, obj.idJob);
    if (response) {
      setReload((prev) => !prev);
    }
  };

  const handleOpenDeleteModal = (obj) => {
    openDeleteModal();
    setViewDetail(obj);
  };

  const handleDeleteCV = async (obj) => {
    const CVsJob = jobs
      .map((job) => job.cv)
      .flat()
      .filter((cv) => cv && cv.idUser !== obj.idUser && cv.idJob === obj.idJob);
    const options = {
      cv: CVsJob,
    };
    const response = await updateJob(options, obj.idJob);
    if (response) {
      toast.success("Đã xoá CV thành công !!!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      closeModal();
      closeDeleteModal();
      setReload((prev) => !prev);
    }
  };

  return (
    CVs && (
      <>
        <CVContainer>
          <CVHeader>
            <FaUsers />
            <h2>Toàn bộ CV ứng tuyển</h2>
          </CVHeader>
          <CVTable>
            <table>
              <thead>
                <tr>
                  <th>Tên việc làm</th>
                  <th>Tên khách hàng</th>
                  <th>Email</th>
                  <th>Thời gian gửi</th>
                  <th>Trạng thái đọc</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {CVs.length > 0 ? (
                  CVs.map((cv, index) => (
                    <tr key={index}>
                      <td>{cv.nameJob}</td>
                      <td>{cv.user?.username}</td>
                      <td>{cv.user?.email}</td>
                      <td>{cv.createdAt}</td>
                      <td>
                        {cv.statusRead ? (
                          <div className="readed">Đã đọc</div>
                        ) : (
                          <div className="unread">Chưa đọc</div>
                        )}
                      </td>
                      <td>
                        <div className="btn-group">
                          <button
                            className="view"
                            onClick={() => handleViewDetail(cv)}>
                            <IoEyeOutline />
                          </button>
                          <button
                            className="delete"
                            onClick={() => handleOpenDeleteModal(cv)}>
                            <IoTrashOutline />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" style={{ textAlign: "center" }}>
                      Chưa có CV nào ứng tuyển
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </CVTable>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            ariaHideApp={false}>
            <ModalHead>
              <h2>{viewDetail.nameJob}</h2>
              <IoCloseOutline onClick={closeModal} />
            </ModalHead>
            <ModalBody>
              <div className="modal-group">
                <h3>Tài khoản</h3>
                <input type="text" defaultValue={viewDetail.user?.username} />
              </div>
              <div className="modal-group">
                <h3>Email</h3>
                <input type="text" defaultValue={viewDetail.user?.email} />
              </div>
              <div className="modal-group">
                <h3>CV ứng tuyển</h3>
                <input type="text" defaultValue={viewDetail?.filename} />
              </div>
              <div className="modal-group">
                <h3>Thư xin việc</h3>
                <textarea defaultValue={viewDetail?.projects}></textarea>
              </div>
            </ModalBody>
            <ModalFoot>
              <button onClick={() => handleOpenDeleteModal(viewDetail)}>
                Xoá CV
              </button>
            </ModalFoot>
          </Modal>
          <DeleteCV
            deleteModalIsOpen={deleteModalIsOpen}
            viewDetail={viewDetail}
            closeDeleteModal={closeDeleteModal}
            onHandleDeleteCV={handleDeleteCV}
          />
        </CVContainer>
        <ToastContainer />
      </>
    )
  );
};

export default CVManage;
