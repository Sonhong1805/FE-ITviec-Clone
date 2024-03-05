import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { TbPasswordFingerprint } from "react-icons/tb";
// import { toast } from "react-toastify";
import * as Yup from "yup";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  AuthenticationError,
  PasswordContainer,
  PasswordContent,
  PasswordHeading,
  ResetButton,
  ResetPasswordInput,
} from "./styled";
import { changePassword } from "../../services/companyService";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { getCookie } from "../../helpers/cookie";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const idCompany = +getCookie("idCompany");

  useEffect(() => {
    if (!idCompany) {
      navigate("/admin/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCompany]);

  const formik = useFormik({
    initialValues: {
      email: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .required("Thông tin bắt buộc")
        .matches(/^.{12,}$/, "Mật khẩu phải có ít nhất 12 ký tự")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_!@#$%^&*()\-+=[\]{};':"\\|,.<>/?]).{12,}$/,
          "Mật khẩu phải chứa ít nhất 12 ký tự bao gồm ký tự đặc biệt, số, chữ HOA, chữ thường"
        ),
      confirmPassword: Yup.string()
        .required("Thông tin bắt buộc")
        .oneOf(
          [Yup.ref("newPassword"), null],
          "Mật khẩu không khớp. Vui lòng nhập lại"
        ),
    }),
    onSubmit: async (values, actions) => {
      const { newPassword } = values;

      const options = {
        password: newPassword,
      };
      const response = await changePassword(options, idCompany);
      if (response) {
        toast.success("Thay đổi mật khẩu thành công", {
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
        toast.error("Oops! Email không tồn tại, vui lòng thử lại.", {
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
      actions.resetForm();
    },
  });
  return (
    <PasswordContainer>
      <PasswordHeading>
        <TbPasswordFingerprint />
        <h2>Thay đổi mật khẩu</h2>
      </PasswordHeading>
      <PasswordContent>
        <form onSubmit={formik.handleSubmit}>
          <ResetPasswordInput>
            <label htmlFor="newPassword">
              <span>Mật khẩu mới</span>
              <abbr>*</abbr>
            </label>
            <div className="password-group">
              <input
                type={newPassword ? "text" : "password"}
                id="newPassword"
                placeholder="Mật khẩu mới"
                value={formik.values.newPassword}
                onBlur={formik.handleChange}
                onChange={formik.handleChange}
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
          <ResetPasswordInput>
            <label htmlFor="confirmPassword">
              <span>Xác nhận mật khẩu mới</span>
              <abbr>*</abbr>
            </label>
            <div className="password-group">
              <input
                type={confirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Xác nhận mật khẩu mới"
                value={formik.values.confirmPassword}
                onBlur={formik.handleChange}
                onChange={formik.handleChange}
                className={formik.errors.confirmPassword ? "active" : ""}
              />
              {confirmPassword ? (
                <FiEye onClick={() => setConfirmPassword(false)} />
              ) : (
                <FiEyeOff onClick={() => setConfirmPassword(true)} />
              )}
            </div>
            <AuthenticationError>
              {formik.errors.confirmPassword}
            </AuthenticationError>
          </ResetPasswordInput>
          <ResetButton type="submit">Cập nhập mật khẩu mới</ResetButton>
        </form>
      </PasswordContent>
      <ToastContainer />
    </PasswordContainer>
  );
};

export default ChangePassword;
