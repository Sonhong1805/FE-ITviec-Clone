import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  AlreadyAccount,
  AuthenticationError,
  NoteAccount,
  RegisterAgreement,
  RegisterAside,
  RegisterButton,
  RegisterContainer,
  RegisterGroup,
  RegisterMain,
  RegisterPasswordInput,
  RegisterWrapper,
  UserRegister,
} from "./styled";
import { checkExits, register } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Register = () => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [agreementGoogle, setAgreementGoogle] = useState(false);
  const [agreementEmail, setAgreementEmail] = useState(false);

  const { t } = useTranslation(["login"]);

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(t("Can't be blank")),
      email: Yup.string()
        .required(t("Can't be blank"))
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t("Please check your email")),
      password: Yup.string()
        .required(t("Can't be blank"))
        .matches(/^.{12,}$/, t("Password must have at least 12 characters"))
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_!@#$%^&*()\-+=[\]{};':"\\|,.<>/?]).{12,}$/,
          t(
            "Password must contain at least 12 characters. Combination of symbols, numbers, uppercase letters, lowercase letters."
          )
        ),
    }),
    onSubmit: async (values) => {
      const { username, email, password } = values;
      const checkExitsEmail = await checkExits("email", email);
      if (checkExitsEmail.length > 0) {
        toast.error(t("Email was used to register an account with Email"), {
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
        const options = {
          username,
          email,
          password,
          token: generateToken(),
        };

        const response = await register(options);
        if (response) {
          navigate("/login");
        }
      }
    },
  });

  return (
    <RegisterWrapper>
      <UserRegister>
        <h3>
          <span>{t("Welcome to")}</span>
          <img src="/assets/images/logo_black_text.png" alt="logo" />
        </h3>
        <RegisterContainer>
          <RegisterMain>
            <h1>{t("Sign up")}</h1>
            <RegisterAgreement htmlFor="agreement-google">
              <input
                type="checkbox"
                id="agreement-google"
                onChange={() => setAgreementGoogle((prev) => !prev)}
              />
              <span>
                {t("By signing up with Google, I agree to ITviec")}{" "}
                <span className="register-rules">
                  {t("Terms & Conditions")}
                </span>{" "}
                {t("and")}{" "}
                <span className="register-rules">{t("Privacy Policy")}</span>{" "}
                {t("in relation to your privacy information.")}
              </span>
            </RegisterAgreement>
            <button
              className={`register-google ${agreementGoogle ? "active" : ""}`}
              disabled={!agreementGoogle}>
              <img src="/assets/svg/google_logo.svg" alt="logo" />
              <span>{t("Sign Up with Google")}</span>
            </button>
            <div className="register-separator">
              <span>{t("or")}</span>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <RegisterGroup>
                <label htmlFor="username">
                  <span>{t("Name")} </span>
                  <abbr>*</abbr>
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder={t("Name")}
                  defaultValue={formik.values.username}
                  onBlur={formik.handleChange}
                  className={formik.errors.username ? "active" : ""}
                />
                <AuthenticationError>
                  {formik.errors.username}
                </AuthenticationError>
              </RegisterGroup>
              <RegisterGroup>
                <label htmlFor="email">
                  <span>{t("Email")}</span>
                  <abbr>*</abbr>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder={t("Email")}
                  defaultValue={formik.values.email}
                  onBlur={formik.handleChange}
                  className={formik.errors.email ? "active" : ""}
                />
                <AuthenticationError>{formik.errors.email}</AuthenticationError>
              </RegisterGroup>
              <RegisterGroup>
                <label htmlFor="password">
                  <span>{t("Password")}</span>
                  <abbr>*</abbr>
                </label>
                <RegisterPasswordInput>
                  <div className="password-group">
                    <input
                      type={togglePassword ? "text" : "password"}
                      id="password"
                      placeholder={t("Password")}
                      onBlur={formik.handleChange}
                      defaultValue={formik.values.password}
                      className={formik.errors.password ? "active" : ""}
                    />
                    {togglePassword ? (
                      <FiEye onClick={() => setTogglePassword(false)} />
                    ) : (
                      <FiEyeOff onClick={() => setTogglePassword(true)} />
                    )}
                  </div>
                  <AuthenticationError>
                    {formik.errors.password}
                  </AuthenticationError>
                </RegisterPasswordInput>
              </RegisterGroup>
              <RegisterAgreement htmlFor="agreement-email">
                <input
                  type="checkbox"
                  id="agreement-email"
                  onChange={() => setAgreementEmail((prev) => !prev)}
                  onBlur={formik.handleChange}
                />
                <span>
                  {t("I have read and agree to ITviec")}{" "}
                  <span className="register-rules">
                    {t("Terms & Conditions")}
                  </span>{" "}
                  {t("and")}{" "}
                  <span className="register-rules">{t("Privacy Policy")}</span>{" "}
                  {t("in relation to your privacy information.")}
                </span>
              </RegisterAgreement>
              <RegisterButton
                className={agreementEmail ? "active" : ""}
                disabled={!agreementEmail}
                type="submit">
                {t("Sign Up with Email")}
              </RegisterButton>
            </form>
            <AlreadyAccount>
              {t("Already have an account?")}{" "}
              <Link to="/login">{t("Sign In Now!")}</Link>
            </AlreadyAccount>
            <NoteAccount>
              <strong>{t("Note")}:</strong>
              <p>
                {t(
                  "Password must contain at least 12 characters. Combination of symbols, numbers, uppercase letters, lowercase letters."
                )}
              </p>
            </NoteAccount>
            <div></div>
          </RegisterMain>
          <RegisterAside>
            <img src="/assets/images/robby-login.png" alt="robby" />
          </RegisterAside>
        </RegisterContainer>
      </UserRegister>
      <ToastContainer />
    </RegisterWrapper>
  );
};

export default Register;
