import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  MdLogout,
  MdOutlineDashboard,
  MdApartment,
  MdGroup,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
  MdOutlineListAlt,
  MdOutlineHome,
} from "react-icons/md";
import { MainContent, Navbar, Wrapper } from "./Main.styled";
import { useState } from "react";
import { deleteCookie } from "../../helpers/cookie";
import { MdOutlinePassword } from "react-icons/md";

const Main = () => {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleLogout = () => {
    deleteCookie("idCompany");
    navigate("/admin/login");
  };

  return (
    <Wrapper>
      <Navbar className={toggleMenu ? "show" : "off"}>
        <ul>
          <div className="close-menu">
            <span>Integro Technologies</span>
            {toggleMenu ? (
              <MdFormatIndentDecrease onClick={() => setToggleMenu(false)} />
            ) : (
              <MdFormatIndentIncrease onClick={() => setToggleMenu(true)} />
            )}
          </div>
          <NavLink to={"/admin/dashboard"}>
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to={"/admin/info-company"}>
            <MdApartment />
            <span>Thông tin công ty</span>
          </NavLink>
          <NavLink to={"/admin/job-manage"}>
            <MdOutlineListAlt />
            <span>Quản lý việc làm</span>
          </NavLink>
          <NavLink to={"/admin/cv-manage"}>
            <MdGroup />
            <span>Quản lý CV</span>
          </NavLink>
          <NavLink to={"/admin/change-password"}>
            <MdOutlinePassword />
            <span>Thay đổi mật khẩu</span>
          </NavLink>
          <NavLink to={"/"}>
            <MdOutlineHome />
            <span>Trang chủ</span>
          </NavLink>
          <div className="log-out" onClick={handleLogout}>
            <MdLogout />
            <span>Đăng xuất</span>
          </div>
        </ul>
      </Navbar>
      <MainContent>
        <Outlet />
      </MainContent>
    </Wrapper>
  );
};

export default Main;
