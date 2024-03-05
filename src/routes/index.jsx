import DefaultLayout from "../layouts/DefaultLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import CompanyDetail from "../pages/CompanyDetail";
import JobDetail from "../pages/JobDetail";
import EmployerLogin from "../pages/EmployerLogin";
import CVApply from "../pages/CVApply";
import ErrorPage from "../pages/404";
import Dashboard from "../pages/Dashboard";
import InfoCompany from "../pages/InfoCompany";
import JobManage from "../pages/JobManage";
import CVManage from "../pages/CVManage";
import ForgotPassword from "../pages/ForgotPassword";
import ChangePassword from "../pages/ChangePassword";
import Settings from "../pages/Settings";
import FindJob from "../pages/FindJob";

export const routes = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "find-job/:field",
        element: <FindJob />,
      },
      {
        path: "job/:id",
        element: <JobDetail />,
      },
      {
        path: "company/:id",
        element: <CompanyDetail />,
      },
      {
        path: "settings/:id",
        element: <Settings />,
      },
    ],
  },
  {
    path: "cv/:id",
    element: <CVApply />,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "info-company",
        element: <InfoCompany />,
      },
      {
        path: "job-manage",
        element: <JobManage />,
      },
      {
        path: "cv-manage",
        element: <CVManage />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <EmployerLogin />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
