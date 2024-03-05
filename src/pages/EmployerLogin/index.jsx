import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  AuthenticationError,
  EmployerAside,
  EmployerButton,
  EmployerContainer,
  EmployerGroup,
  EmployerMain,
  EmployerPasswordInput,
  EmployerPasswordLabel,
  EmployerRemember,
  EmployerWelcome,
  EmployerWrapper,
  NoteAccount,
} from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { getCompanyList, setRemember } from "../../services/companyService";
import { login } from "../../services/companyService";
import { setCookie } from "../../helpers/cookie";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Bounce, ToastContainer, toast } from "react-toastify";
import Header from "../../layouts/AdminLayout/Header";
import Footer from "../../layouts/AdminLayout/Footer";

const EmployerLogin = () => {
  const navigate = useNavigate();
  const [togglePassword, setTogglePassword] = useState(false);
  const [rememberMe, setRememberMe] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [companyDefaults, setCompanyDefaults] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getCompanyList();
      if (response) {
        setCompanyDefaults(response[0]);
        const rememberCompany = response.find((company) => company.isRemember);
        if (rememberCompany) {
          setRememberMe({
            email: rememberCompany.email || "",
            password: rememberCompany.password || "",
            remember: rememberCompany.isRemember || false,
          });
        }
      }
    };
    fetchApi();
  }, []);

  const formik = useFormik({
    initialValues: {
      email: rememberMe.email,
      password: rememberMe.password,
      remember: rememberMe.remember,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Required Information")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Email address is not valid"),
      password: Yup.string()
        .required("Required Information")
        .matches(/^.{12,}$/, "Password must have at least 12 characters")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_!@#$%^&*()\-+=[\]{};':"\\|,.<>/?]).{12,}$/,
          "Password must contain at least 12 characters including special characters, numbers, uppercase letters, and lowercase letters"
        ),
    }),
    onSubmit: async (values) => {
      const { email, password, remember } = values;
      try {
        const response = await login(email, password);
        if (response.length > 0) {
          const companyId = response[0].id;

          setCookie("idCompany", companyId, 1);
          navigate("/admin/dashboard");

          if (remember.length > 0) {
            const allCompany = await getCompanyList();

            for (const company of allCompany) {
              if (company.id !== companyId) {
                await setRemember({ isRemember: false }, company.id);
              }
            }
          }

          await setRemember({ isRemember: remember }, companyId);
        } else {
          toast.error(
            "Oops! Wrong username and/or password. Please try again.",
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
      } catch (error) {
        console.error(error);
      }
    },
  });

  useEffect(() => {
    if (rememberMe.email && rememberMe.password) {
      formik.setValues({
        email: rememberMe.email,
        password: rememberMe.password,
        remember: rememberMe.remember,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rememberMe]);

  return (
    <>
      <Header />
      <EmployerWrapper>
        <EmployerWelcome>
          <h3>
            <span>Welcome to the</span>
            <img src="/assets/images/logo_black_text.png" alt="logo" />
            <span>Customer Admin Site</span>
          </h3>
          <EmployerContainer>
            <EmployerMain>
              <h1>Log In</h1>
              <div className="employer-message">
                By logging in, you agree to ITviec&apos;s{" "}
                <span className="employer-rules">Terms & Conditions</span> and{" "}
                <span className="employer-rules">Privacy Policy</span> in
                relation to your privacy information.
              </div>
              <form onSubmit={formik.handleSubmit}>
                <EmployerGroup>
                  <label htmlFor="email">
                    <span>Email Address</span>
                    <abbr>*</abbr>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    defaultValue={rememberMe.email}
                    onChange={(e) =>
                      setRememberMe({ ...rememberMe, email: e.target.value })
                    }
                    onBlur={formik.handleChange}
                    className={formik.errors.email ? "active" : ""}
                  />
                  <AuthenticationError>
                    {formik.errors.email}
                  </AuthenticationError>
                </EmployerGroup>
                <EmployerGroup>
                  <EmployerPasswordLabel>
                    <label htmlFor="password">
                      <span>Password</span>
                      <abbr>*</abbr>
                    </label>
                    <Link>Forgot Password?</Link>
                  </EmployerPasswordLabel>
                  <EmployerPasswordInput>
                    <div className="password-group">
                      <input
                        type={togglePassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        defaultValue={rememberMe.password}
                        onChange={(e) =>
                          setRememberMe({
                            ...rememberMe,
                            password: e.target.value,
                          })
                        }
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
                  </EmployerPasswordInput>
                </EmployerGroup>
                <EmployerRemember>
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe.remember}
                    onChange={(e) =>
                      setRememberMe({
                        ...rememberMe,
                        remember: e.target.checked,
                      })
                    }
                    onBlur={formik.handleChange}
                  />
                  <label htmlFor="remember">Remember me</label>
                </EmployerRemember>
                <EmployerButton type="submit">Log In</EmployerButton>
              </form>
              <NoteAccount>
                <div>
                  <strong>Note:</strong>
                  <p>
                    Password must contain at least 12 characters. Combination of
                    symbols, numbers, uppercase letters, lowercase letters.
                    Example: 2(!TmRqn`*-HJqwP
                  </p>
                </div>
                <div>
                  <strong>Test:</strong>
                  <p>
                    Email:{companyDefaults.email}
                    <br />
                    Password:{companyDefaults.password}
                  </p>
                </div>
              </NoteAccount>
            </EmployerMain>
            <EmployerAside>
              <img src="/assets/images/robby-login.png" alt="robby" />
            </EmployerAside>
          </EmployerContainer>
        </EmployerWelcome>
      </EmployerWrapper>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default EmployerLogin;
