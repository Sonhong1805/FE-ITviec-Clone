import {
  CVContainer,
  CVFile,
  CVForm,
  CVHeading,
  CVLetter,
  CVPage,
  CVSubmit,
  CVWrapper,
  ModalForm,
  customStyles,
} from "./styled";
import { FaRegCircleDot, FaRegCircle } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import logo from "/assets/images/logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { createCV, getJobDetail } from "../../services/jobService";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { getTimeCurrent } from "../../helpers/getTimeCurrent";
import { getUserDetail, updateCV } from "../../services/userService";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const CVApply = () => {
  const { id } = useParams();
  const [filename, setFilename] = useState();
  const [currentJob, setCurrentJob] = useState({});
  const [userDetail, setUserDetail] = useState({});
  const [jobsCV, setJobsCV] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentCV, setCurrentCV] = useState({});
  const [fileError, setFileError] = useState();
  const fileRef = useRef();

  const { t, i18n } = useTranslation(["cv"]);
  const language = i18n.language;

  const navigate = useNavigate();

  const [text, setText] = useState("");
  const maxLength = 500;

  const username = getCookie("username");
  const idUser = getCookie("id");

  const fetchData = async () => {
    const jobDetail = await getJobDetail(id);
    const userDetail = await getUserDetail(+idUser);
    if (userDetail) {
      setUserDetail({ ...userDetail, type: userDetail.type ? "old" : "new" });
      setFilename(userDetail.filename);
    }
    if (jobDetail) {
      setCurrentJob(jobDetail);
      setJobsCV(jobDetail.cv ?? []);
      const myCV = jobDetail.cv?.find((cv) => cv.idUser === +idUser);
      if (myCV) {
        setCurrentCV(myCV);
      }
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(currentJob);

  const handleFileChange = (e) => {
    setFilename(e.target.files[0].name);
  };

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const handleAlert = (response) => {
    if (response) {
      toast.success("Tuyệt vời! CV của bạn đã được ghi nhận", {
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
      fileRef.current.value = "";
      setFilename("");
      fetchData();
    }
  };

  const remainingCharacters = maxLength - text.length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projects = e.target[2].value;
    const options = {
      cv: [
        ...jobsCV,
        {
          idCV: Date.now(),
          idUser: +idUser,
          idJob: +id,
          nameJob: currentJob.name,
          filename,
          projects,
          createdAt: getTimeCurrent(),
        },
      ],
    };

    if (userDetail.type === "old") {
      const objUser = {
        filename,
        projects,
      };
      const response = await createCV(options, id);
      await updateCV(objUser, idUser);
      handleAlert(response);
    } else if (userDetail.type === "new" && currentCV.idUser) {
      if (!filename) {
        setFileError(t("Can't be blank"));
      } else if (!/\.(doc|docx|pdf)$/i.test(filename)) {
        setFileError(t("Oops! Please attach a .doc .docx .pdf file"));
      } else {
        setFileError("");
        const objUser = {
          filename,
          projects,
          type: "old",
        };
        const response = await createCV(options, id);
        await updateCV(objUser, idUser);
        handleAlert(response);
        fileRef.current.value = "";
      }
    } else {
      const response = await createCV(options, id);
      const objUser = {
        filename,
        projects,
        type: "old",
      };

      await updateCV(objUser, idUser);
      handleAlert(response);
    }
    setText("");
  };

  const handleCurrentCV = (value) => {
    setUserDetail({ ...userDetail, type: value });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <CVPage>
      <div className="bg-shape"></div>
      <CVWrapper>
        <CVHeading>
          <button className="back" onClick={openModal}>
            <IoIosArrowBack />
            <span>{t("Back")}</span>
          </button>
          <img src={logo} alt="logo-itviec" />
        </CVHeading>
        <CVContainer>
          <h2>{currentJob.name}</h2>
          <CVForm onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                defaultValue={currentCV.username || username}
              />
              <label htmlFor="username">
                {t("Your name")} <abbr>*</abbr>
              </label>
            </div>
            <h3>
              {t("Your CV")} <abbr>*</abbr>
            </h3>
            {userDetail.filename && (
              <CVFile className={userDetail.type === "old" ? "active" : ""}>
                {userDetail.type === "old" ? (
                  <FaRegCircleDot onClick={() => handleCurrentCV("old")} />
                ) : (
                  <FaRegCircle onClick={() => handleCurrentCV("old")} />
                )}
                <div className="upload-cv">
                  <span>{t("Use your current CV")}</span>
                  <p className="current-project">{userDetail.filename}</p>
                </div>
              </CVFile>
            )}
            <CVFile className={userDetail.type === "new" ? "active" : ""}>
              {userDetail.type === "new" ? (
                <FaRegCircleDot onClick={() => handleCurrentCV("new")} />
              ) : (
                <FaRegCircle onClick={() => handleCurrentCV("new")} />
              )}
              <div className="upload-cv">
                <span>{t("Upload new CV")}</span>
                <br />
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  ref={fileRef}
                />
                <p className="file-error">{fileError}</p>
                <p>
                  {t(
                    "We accept .doc .docx, .pdf files, no password protected, up to 3MB"
                  )}
                </p>
              </div>
            </CVFile>
            <CVLetter>
              <h3>
                {t("Cover Letter")} <span>({t("Optional")})</span>
              </h3>
              <p className="advantages">
                {t(
                  "What skills, work projects or achievements make you a strong candidate?"
                )}
              </p>
              <textarea
                id="description"
                onChange={handleChange}
                maxLength="500"
                value={text}
                placeholder={t(
                  "Details and specific examples will make your application stronger..."
                )}></textarea>
              <p className="characters">
                {language === "en" ? (
                  <>
                    <span>{remainingCharacters}</span> of 500 characters
                    remaining
                  </>
                ) : (
                  <>
                    Còn lại <span>{remainingCharacters}</span> trong tổng số 500
                    ký tự
                  </>
                )}
              </p>
            </CVLetter>
            <CVSubmit>{t("Send my CV")}</CVSubmit>
          </CVForm>
        </CVContainer>
      </CVWrapper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}>
        <ModalForm>
          <div className="form-group">
            <h2>{t("Quit applying")}</h2>
            <IoCloseOutline onClick={closeModal} />
          </div>
          <p>
            {t(
              "Changes you made so far will not be saved. Are you sure you want to quit this page?"
            )}
          </p>
          <div className="button-group">
            <button onClick={closeModal}>{t("Continue applying")}</button>
            <button onClick={() => navigate(-1)}>{t("Confirm")}</button>
          </div>
        </ModalForm>
      </Modal>
      <ToastContainer />
    </CVPage>
  );
};

export default CVApply;
