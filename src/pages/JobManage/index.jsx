import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { IoTrashOutline, IoCreateOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { JobContainer, JobContent, JobHeading } from "./styled";
import { destroyJob, getJobsCompany } from "../../services/jobService";
import { getTagList } from "../../services/tagService";
import CreateJob from "./CreateJob";
import EditJob from "./EditJob";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import DeleteJob from "./DeleteJob";

const JobManage = () => {
  const [jobs, setJobs] = useState([]);
  const [jobDetail, setJobDetail] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [tagOptions, setTagOptions] = useState([]);
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();
  const idCompany = +getCookie("idCompany");

  useEffect(() => {
    if (idCompany) {
      const fetchData = async () => {
        const [jobsCompany, tagList] = await Promise.all([
          getJobsCompany(idCompany),
          getTagList(),
        ]);
        if (jobsCompany && tagList) {
          setJobs(jobsCompany);
          setTagOptions(tagList);
        }
      };
      fetchData();
    } else {
      navigate("/admin/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCompany, reload]);

  const handleAlert = (message) => {
    toast.success(message, {
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
  };

  const handleDeleteJob = async (job) => {
    const response = await destroyJob(job.id);
    if (response) {
      closeEditModal();
      closeDeleteModal();
      handleAlert("Đã xoá công việc thành công");
    }
    setReload((prev) => !prev);
  };

  const handleEditModal = (job) => {
    openEditModal();
    setJobDetail(job);
  };

  const handleDeleteModal = (job) => {
    openDeleteModal();
    setJobDetail(job);
  };

  function openEditModal() {
    setIsOpen(true);
  }

  function closeEditModal() {
    setIsOpen(false);
  }

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

  return (
    jobs && (
      <JobContainer>
        <JobHeading>
          <div className="all-job">
            <FaTasks />
            <h2>Toàn bộ việc làm</h2>
          </div>
          <CreateJob setReload={setReload} onHandleAlert={handleAlert} />
        </JobHeading>
        <JobContent>
          <table>
            <thead>
              <tr>
                <th>Tên việc làm</th>
                <th>Tags</th>
                <th>Mức lương</th>
                <th>Phù hợp</th>
                <th>Thời gian</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {jobs.length > 0 ? (
                jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.name}</td>
                    <td>
                      {job?.tags?.map((tag) => (
                        <div key={tag} className="tag">
                          {tag}
                        </div>
                      ))}
                    </td>
                    <td>{job.salary} USD</td>
                    <td>{job.rank}</td>
                    <td>
                      <div>Ngày tạo: {job.createdAt}</div>
                      <div>Cập nhật: {job.updatedAt}</div>
                    </td>
                    <td>
                      {job.status ? (
                        <div className="status-on">Đang bật</div>
                      ) : (
                        <div className="status-off">Đã tắt</div>
                      )}
                    </td>
                    <td>
                      <div className="btn-group">
                        <button
                          className="edit"
                          onClick={() => handleEditModal(job)}>
                          <IoCreateOutline />
                        </button>
                        <button
                          className="delete"
                          onClick={() => handleDeleteModal(job)}>
                          <IoTrashOutline />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    Chưa có công việc nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </JobContent>
        <EditJob
          tagOptions={tagOptions}
          setReload={setReload}
          modalIsOpen={modalIsOpen}
          closeEditModal={closeEditModal}
          jobDetail={jobDetail}
          openDeleteModal={openDeleteModal}
          onHandleAlert={handleAlert}
        />
        <DeleteJob
          jobDetail={jobDetail}
          deleteModalIsOpen={deleteModalIsOpen}
          closeDeleteModal={closeDeleteModal}
          onHandleDeleteJob={handleDeleteJob}
        />
        <ToastContainer />
      </JobContainer>
    )
  );
};

export default JobManage;
