import { useEffect, useState } from "react";
import {
  ChangePassword,
  GeneralInfomation,
  ModalBody,
  ModalFooter,
  ModalHead,
  SettingsContainer,
  SettingsContent,
  SettingsDelete,
  SettingsWrapper,
  customStyles,
} from "./styled";
import { BsInfoCircle } from "react-icons/bs";
import { FiEdit3 } from "react-icons/fi";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";
import { deleteAllCookies, getCookie, setCookie } from "../../helpers/cookie";
import {
  changePassword,
  deleteAccount,
  login,
  updateUser,
} from "../../services/userService";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { useTranslation } from "react-i18next";
import { getJobList, updateJob } from "../../services/jobService";

const Settings = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [changeUsername, setChangeUsername] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [allJob, setAllJob] = useState([]);

  const { t } = useTranslation(["settings"]);

  const username = getCookie("username");
  const email = getCookie("email");
  const token = getCookie("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getJobList();
      if (response) {
        setAllJob(response);
      }
    };

    fetchData();
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChangeUsername = async () => {
    const options = {
      username: newUsername,
    };

    await updateUser(options, id);
    const time = 1;
    setCookie("id", id, time);
    setCookie("username", newUsername, time);
    setCookie("token", token, time);
    setCookie("email", email, time);
    setChangeUsername(false);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string().required(
        `${t("Please enter")} ${t("Current password")}`
      ),
      newPassword: Yup.string()
        .required(`${t("Please enter")} ${t("New password")}`)
        .matches(/^.{12,}$/, t("Password must have at least 12 characters"))
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_!@#$%^&*()\-+=[\]{};':"\\|,.<>/?]).{12,}$/,
          t(
            "Password must contain at least 12 characters including special characters, numbers, uppercase letters, and lowercase letters"
          )
        ),
      confirmPassword: Yup.string()
        .required(`${t("Please enter")} ${t("New password")}`)
        .oneOf(
          [Yup.ref("newPassword"), null],
          t("Please re-enter the correct new password")
        ),
    }),
    onSubmit: async (values, actions) => {
      const { currentPassword, newPassword } = values;
      const checkExitPassword = await login(email, currentPassword);
      if (checkExitPassword.length > 0) {
        await changePassword({ password: newPassword }, id);
        toast.success(t("New password saved successfully!"), {
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
      } else {
        toast.error(
          t("Password change failed! Enter your current password correctly"),
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
      }
      actions.resetForm();
    },
  });

  const handleDeleteAccount = async () => {
    await deleteAccount(id);
    deleteAllCookies();
    dispatch(checkLogin(false));
    navigate("/");
    const newJobs = allJob.map((job) => ({
      ...job,
      cv: job?.cv?.filter((user) => user.idUser !== +id),
    }));
    for (const job of newJobs) {
      await updateJob(job, job.id);
    }
  };

  return (
    <SettingsWrapper>
      <SettingsContainer>
        <SettingsContent>
          <h2>{t("My Account")}</h2>
          <hr />
          <GeneralInfomation>
            <h3>{t("General Information")}</h3>
            <div className="row">
              <div className="col-3 title">Email:</div>
              <div className="col-9 info">
                <span>{email}</span>
                <div className="tooltip">
                  <BsInfoCircle className="info-circle" />
                  <div className="tooltip-inner">
                    {t("You can't change your login email")}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-3 title">{t("Username")}:</div>
              {changeUsername ? (
                <div className="col-9">
                  <input
                    type="text"
                    defaultValue={username}
                    onChange={(e) => setNewUsername(e.target.value)}
                  />
                  <div className="button-group">
                    <button className="save" onClick={handleChangeUsername}>
                      {t("Save")}
                    </button>
                    <button
                      className="cancel"
                      onClick={() => setChangeUsername(false)}>
                      {t("Cancel")}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="col-9 info">
                  <span>{username}</span>
                  <FiEdit3
                    className="info-edit"
                    onClick={() => setChangeUsername(true)}
                  />
                </div>
              )}
            </div>
          </GeneralInfomation>
          <hr />
          <ChangePassword className="row">
            <div className="col-3">
              <h3>{t("Change password")}</h3>
            </div>
            <div className="col-9">
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder={t("Current password")}
                    id="currentPassword"
                    value={formik.values.currentPassword}
                    onBlur={formik.handleChange}
                    onChange={formik.handleChange}
                    className={formik.errors.currentPassword ? "error" : ""}
                  />
                  <div className="error">{formik.errors.currentPassword}</div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="newPassword"
                    placeholder={t("New password")}
                    value={formik.values.newPassword}
                    onBlur={formik.handleChange}
                    onChange={formik.handleChange}
                    className={formik.errors.newPassword ? "error" : ""}
                  />
                  <div className="error">{formik.errors.newPassword}</div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="confirmPassword"
                    placeholder={t("Enter a new password")}
                    value={formik.values.confirmPassword}
                    onBlur={formik.handleChange}
                    onChange={formik.handleChange}
                    className={formik.errors.confirmPassword ? "error" : ""}
                  />
                  <div className="error">{formik.errors.confirmPassword}</div>
                </div>
                <div className="button-group">
                  <button type="submit">{t("Update new password")}</button>
                </div>
              </form>
            </div>
          </ChangePassword>
        </SettingsContent>
        <SettingsDelete>
          <h2>{t("Delete Account")}</h2>
          <hr />
          <p>{t("Account deletion")}</p>
          <button onClick={openModal}>{t("Delete Account")}</button>
        </SettingsDelete>
      </SettingsContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}>
        <ModalHead>
          <h2>{t("Are you sure you want to delete your account?")}</h2>
          <IoCloseOutline onClick={closeModal} />
        </ModalHead>
        <ModalBody>
          <p>{t("Account deletion removes")}</p>
          <h4>{t("This cannot be undone.")}</h4>
        </ModalBody>
        <ModalFooter>
          <button className="cancel" onClick={closeModal}>
            {t("Cancel")}
          </button>
          <button className="delete" onClick={handleDeleteAccount}>
            {t("Delete Account")}
          </button>
        </ModalFooter>
      </Modal>
      <ToastContainer />
    </SettingsWrapper>
  );
};

export default Settings;
