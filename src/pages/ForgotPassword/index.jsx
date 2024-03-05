import { FiEye, FiEyeOff } from "react-icons/fi";

import { useState } from "react";
import {
  AuthenticationError,
  NoteAccount,
  ResetAside,
  ResetButton,
  ResetContainer,
  ResetGroup,
  ResetMain,
  ResetPasswordInput,
  ResetWrapper,
  UserReset,
} from "./styled";
import { changePassword, checkExits } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const { t } = useTranslation(["login"]);

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(t("Can't be blank"))
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t("Please check your email")),
      newPassword: Yup.string()
        .required(t("Can't be blank"))
        .matches(/^.{12,}$/, t("Password must have at least 12 characters"))
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_!@#$%^&*()\-+=[\]{};':"\\|,.<>/?]).{12,}$/,
          t(
            "Password must contain at least 12 characters. Combination of symbols, numbers, uppercase letters, lowercase letters."
          )
        ),
      confirmPassword: Yup.string()
        .required(t("Can't be blank"))
        .oneOf(
          [Yup.ref("newPassword"), null],
          t("Confirm password is different from New password")
        ),
    }),
    onSubmit: async (values) => {
      const { email, newPassword } = values;
      const checkExistEmail = await checkExits("email", email);
      if (checkExistEmail.length > 0) {
        const options = {
          password: newPassword,
        };
        const id = checkExistEmail[0].id;
        const response = await changePassword(options, id);
        if (response) {
          navigate("/login");
        }
      } else {
        toast.error(
          t("Oops! This email address doesn't exist, please try again"),
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
    },
  });

  return (
    <ResetWrapper>
      <UserReset>
        <h3>
          <span>{t("Welcome to")}</span>
          <img src="/assets/images/logo_black_text.png" alt="logo" />
        </h3>
        <ResetContainer>
          <ResetMain>
            <h1>{t("Reset Password")}</h1>
            <form onSubmit={formik.handleSubmit}>
              <ResetGroup>
                <label htmlFor="email">
                  <span>{t("Email Address")} </span>
                  <abbr>*</abbr>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t("Email Address")}
                  defaultValue={formik.values.email}
                  onBlur={formik.handleChange}
                  className={formik.errors.email ? "active" : ""}
                />
                <AuthenticationError>{formik.errors.email}</AuthenticationError>
              </ResetGroup>
              <ResetGroup>
                <label htmlFor="newPassword">
                  <span>{t("New Password")}</span>
                  <abbr>*</abbr>
                </label>
                <ResetPasswordInput>
                  <div className="password-group">
                    <input
                      type={newPassword ? "text" : "password"}
                      id="newPassword"
                      placeholder={t("New Password")}
                      defaultValue={formik.values.newPassword}
                      onBlur={formik.handleChange}
                      className={formik.errors.newPassword ? "active" : ""}
                    />
                    {newPassword ? (
                      <FiEye onClick={() => setNewPassword(false)} />
                    ) : (
                      <FiEyeOff onClick={() => setNewPassword(true)} />
                    )}
                  </div>
                  <AuthenticationError>
                    {formik.errors.newPassword}
                  </AuthenticationError>
                </ResetPasswordInput>
              </ResetGroup>
              <ResetGroup>
                <div className="password-group">
                  <label htmlFor="confirmPassword">
                    <span>{t("Confirm Password")}</span>
                    <abbr>*</abbr>
                  </label>
                  <ResetPasswordInput>
                    <input
                      type={confirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder={t("Confirm Password")}
                      defaultValue={formik.values.confirmPassword}
                      onBlur={formik.handleChange}
                      className={formik.errors.confirmPassword ? "active" : ""}
                    />
                    {confirmPassword ? (
                      <FiEye onClick={() => setConfirmPassword(false)} />
                    ) : (
                      <FiEyeOff onClick={() => setConfirmPassword(true)} />
                    )}
                  </ResetPasswordInput>
                  <AuthenticationError>
                    {formik.errors.confirmPassword}
                  </AuthenticationError>
                </div>
              </ResetGroup>
              <ResetButton type="submit">
                {t("Update new Password")}
              </ResetButton>
            </form>
            <NoteAccount>
              <strong>{t("Note")}:</strong>
              <p>
                {t(
                  "Password must contain at least 12 characters. Combination of symbols, numbers, uppercase letters, lowercase letters."
                )}
              </p>
            </NoteAccount>
          </ResetMain>
          <ResetAside>
            <img src="/assets/images/robby-login.png" alt="robby" />
          </ResetAside>
        </ResetContainer>
      </UserReset>
      <ToastContainer />
    </ResetWrapper>
  );
};

export default ForgotPassword;
