import { Link, useNavigate } from "react-router-dom";
import {
  AuthenticationContainer,
  AuthenticationEmailGroup,
  AuthenticationError,
  AuthenticationFeature,
  AuthenticationFeatureItem,
  AuthenticationFeatureList,
  AuthenticationLogin,
  AuthenticationMain,
  AuthenticationPasswordGroup,
  AuthenticationPasswordInput,
  AuthenticationPasswordLabel,
  AuthenticationRegister,
  AuthenticationWrapper,
  UserAuthentication,
} from "./styled";
import { FiCheck } from "react-icons/fi";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { login } from "../../services/userService";
import { setCookie } from "../../helpers/cookie";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/login";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import Logo_Black_Text from "/assets/images/logo_black_text.png";

const Login = () => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const dispatch = useDispatch();

  const { t } = useTranslation(["login"]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required(t("Can't be blank"))
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, t("Please check your email")),
      password: Yup.string().required(t("Can't be blank")),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      const response = await login(email, password);
      if (response.length > 0) {
        setCookie("id", response[0].id, 1);
        setCookie("username", response[0].username, 1);
        setCookie("email", response[0].email, 1);
        setCookie("token", response[0].token, 1);
        dispatch(checkLogin(true));
        navigate("/");
      } else {
        toast.error(t("Email or password is incorrect"), {
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
      }
    },
  });

  return (
    <AuthenticationWrapper>
      <UserAuthentication>
        <h3>
          <span>{t("Welcome to")}</span>
          <img src={Logo_Black_Text} alt="logo-black-text" />
        </h3>
        <AuthenticationContainer>
          <AuthenticationMain>
            <div className="authentication-message">
              {t("By signing in, you agree to ITviec")}{" "}
              <span className="authentication-rules">
                {t("Terms & Conditions")}
              </span>{" "}
              {t("and")}{" "}
              <span className="authentication-rules">
                {t("Privacy Policy")}
              </span>{" "}
              {t("in relation to your privacy information.")}
            </div>
            <button className="authentication-google">
              <img src="../../assets/svg/google_logo.svg" alt="logo" />
              <span>{t("Sign In with Google")}</span>
            </button>
            <div className="authentication-separator">
              <span>{t("or")}</span>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <AuthenticationEmailGroup>
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
              </AuthenticationEmailGroup>
              <AuthenticationPasswordGroup>
                <AuthenticationPasswordLabel>
                  <label htmlFor="password">
                    <span>{t("Password")}</span>
                    <abbr>*</abbr>
                  </label>
                  <Link to={"/forgot-password"}>{t("Forgot password?")}</Link>
                </AuthenticationPasswordLabel>
                <AuthenticationPasswordInput>
                  <div className="password-group">
                    <input
                      type={togglePassword ? "text" : "password"}
                      id="password"
                      placeholder={t("Password")}
                      defaultValue={formik.values.password}
                      onBlur={formik.handleChange}
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
                </AuthenticationPasswordInput>
              </AuthenticationPasswordGroup>
              <AuthenticationLogin type="submit">
                {t("Sign In with Email")}
              </AuthenticationLogin>
            </form>
            <AuthenticationRegister>
              {t("Do not have an account?")}{" "}
              <Link to="/register">{t("Sign up now!")}</Link>
            </AuthenticationRegister>
          </AuthenticationMain>
          <AuthenticationFeature>
            <h2>
              {t(
                "Sign in to get instant access to thousands of reviews and salary information"
              )}
            </h2>
            <AuthenticationFeatureList>
              <AuthenticationFeatureItem>
                <FiCheck />
                <p>
                  {t(
                    "View salary to help you negotiate your offer or pay rise"
                  )}
                </p>
              </AuthenticationFeatureItem>
              <AuthenticationFeatureItem>
                <FiCheck />
                <p>
                  {t(
                    "Find out about benefits, interview, company culture via reviews"
                  )}
                </p>
              </AuthenticationFeatureItem>
              <AuthenticationFeatureItem>
                <FiCheck />
                <p>{t("Easy apply with only 1 click")}</p>
              </AuthenticationFeatureItem>
              <AuthenticationFeatureItem>
                <FiCheck />
                <p>{t("Manage your own profile & privacy")}</p>
              </AuthenticationFeatureItem>
            </AuthenticationFeatureList>
          </AuthenticationFeature>
        </AuthenticationContainer>
      </UserAuthentication>
      <ToastContainer />
    </AuthenticationWrapper>
  );
};

export default Login;
