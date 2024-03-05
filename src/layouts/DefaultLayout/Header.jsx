import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  HeaderAccount,
  HeaderContainer,
  HeaderLanguage,
  HeaderList,
  HeaderListItem,
  HeaderNavbar,
  HeaderSubmenu,
  LogoLink,
  MenuLink,
  StyledHeader,
} from "./Header.styled";
import { Link, useNavigate } from "react-router-dom";
import { deleteAllCookies, getCookie } from "../../helpers/cookie";
import { FaRegUserCircle } from "react-icons/fa";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin } from "../../actions/login";
import { useEffect, useRef, useState } from "react";
import { getCityList } from "../../services/cityService";
import { getTagList } from "../../services/tagService";
import { getCompanyList } from "../../services/companyService";
import { useTranslation } from "react-i18next";
import Logo from "/assets/images/logo.png";

const Header = () => {
  const { t, i18n } = useTranslation(["header"]);
  const developer = i18n.language;

  const token = getCookie("token");
  const username = getCookie("username");
  const id = getCookie("id");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [activeIndex, setActiveIndex] = useState(0);
  const [tagList, setTagList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [companyList, setCompanyList] = useState([]);

  const headerContainerRef = useRef();

  // eslint-disable-next-line no-unused-vars
  const isLogin = useSelector((state) => state.loginReducer);

  useEffect(() => {
    const fetchData = async () => {
      const [allTag, allCity, allCompany] = await Promise.all([
        getTagList(),
        getCityList(),
        getCompanyList(),
      ]);
      if (allTag) {
        setTagList(allTag);
      }
      if (allCity) {
        setCityList(allCity);
      }
      if (allCompany) {
        setCompanyList(allCompany);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    deleteAllCookies();
    dispatch(checkLogin(false));
    navigate(location.pathname + location.search);
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleSubmenuItem = (field, value) => {
    if (field === "keywords" || field === "city") {
      navigate(`/search?${field}=${value}`);
    } else if (field === "company") {
      navigate(`/${field}/${value}`);
    }
  };

  const handleLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        headerContainerRef.current.style.height = "6rem";
      } else {
        headerContainerRef.current.style.height = "8.8rem";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader>
      <HeaderContainer ref={headerContainerRef}>
        <LogoLink to="/">
          <img src={Logo} />
        </LogoLink>
        <HeaderNavbar>
          <HeaderList>
            <HeaderListItem onMouseEnter={() => handleMouseEnter(0)}>
              <MenuLink>
                {t("All Jobs.value")} <IoIosArrowDown />
              </MenuLink>
              <HeaderSubmenu className={`submenu active-${activeIndex}`}>
                <li
                  className={`submenu-item ${
                    activeIndex === 1 ? "active skills" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(1)}>
                  <span>{t("All Jobs.skills")}</span>
                  <IoIosArrowForward />
                  <ul className="submenu-child skills">
                    {tagList.slice(0, 32).map((tag) => (
                      <li
                        key={tag.key}
                        onClick={() =>
                          handleSubmenuItem("keywords", tag.value)
                        }>
                        {tag.value}
                      </li>
                    ))}
                    <li onClick={() => navigate("/find-job/skill")}>
                      {t("View all Jobs by skill")}
                    </li>
                  </ul>
                </li>
                <li
                  className={`submenu-item ${
                    activeIndex === 2 ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(2)}>
                  <span>{t("All Jobs.title")}</span>
                  <IoIosArrowForward />
                  <ul className="submenu-child ranks">
                    {tagList.slice(21, 45).map((tag) => (
                      <li
                        key={tag.key}
                        onClick={() =>
                          handleSubmenuItem("keywords", tag.value)
                        }>
                        {developer === "vi"
                          ? `${t("All Jobs.developer")} ${tag.value}`
                          : `${tag.value} ${t("All Jobs.developer")}`}
                      </li>
                    ))}
                  </ul>
                </li>
                <li
                  className={`submenu-item ${
                    activeIndex === 3 ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(3)}>
                  <span>{t("All Jobs.company")}</span>
                  <IoIosArrowForward />
                  <ul className="submenu-child companies">
                    {companyList.map((company) => (
                      <li
                        key={company.id}
                        onClick={() =>
                          handleSubmenuItem("company", company.id)
                        }>
                        {company.name}
                      </li>
                    ))}
                    <li onClick={() => navigate("/find-job/company")}>
                      {t("View all Jobs by company")}
                    </li>
                  </ul>
                </li>
                <li
                  className={`submenu-item ${
                    activeIndex === 4 ? "active" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(4)}>
                  <span>{t("All Jobs.city")}</span>
                  <IoIosArrowForward />
                  <ul className="submenu-child cities">
                    {cityList.map((city) => (
                      <li
                        key={city.key}
                        onClick={() => handleSubmenuItem("city", city.value)}>
                        {city.value}
                      </li>
                    ))}
                    <li onClick={() => handleSubmenuItem("city", "")}>
                      {t("All Jobs.others")}
                    </li>
                  </ul>
                </li>
              </HeaderSubmenu>
            </HeaderListItem>
            <HeaderListItem onMouseEnter={() => handleMouseEnter(0)}>
              <MenuLink>
                {t("IT Companies.value")} <IoIosArrowDown />
              </MenuLink>
              <HeaderSubmenu className={`submenu active-${activeIndex}`}>
                <li
                  className={`submenu-item ${
                    activeIndex === 5 ? "active skills" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(5)}>
                  <span>{t("IT Companies.Best IT Companies")}</span>
                  <IoIosArrowForward />
                  <ul className="submenu-child">
                    <li>{t("IT Companies.Best IT Companies")} 2023</li>
                    <li>{t("IT Companies.Best IT Companies")} 2022</li>
                    <li>{t("IT Companies.Best IT Companies")} 2021</li>
                    <li>{t("IT Companies.Best IT Companies")} 2020</li>
                    <li>{t("IT Companies.Best IT Companies")} 2019</li>
                  </ul>
                </li>
                <li className={`submenu-item`}>
                  <span>{t("IT Companies.Company Reviews")}</span>
                </li>
              </HeaderSubmenu>
            </HeaderListItem>
            <HeaderListItem onMouseEnter={() => handleMouseEnter(0)}>
              <MenuLink>
                Blog <IoIosArrowDown />
              </MenuLink>
              <HeaderSubmenu className={`submenu`}>
                <li className={`submenu-item`}>
                  <span>{t("Blog.IT Salary Report")}</span>
                  <IoIosArrowForward />
                  <ul className="submenu-child">
                    <li>{t("Blog.IT Salary Report")} 2023-2024</li>
                    <li>{t("Blog.IT Salary Report")} 2022-2023</li>
                  </ul>
                </li>
                <li className={`submenu-item `}>
                  <span>{t("Blog.IT Career")}</span>
                </li>
                <li className={`submenu-item `}>
                  <span>{t("Blog.Applying & Career Up")}</span>
                </li>
                <li className={`submenu-item `}>
                  <span>{t("Blog.IT Expertise")}</span>
                </li>
              </HeaderSubmenu>
            </HeaderListItem>
          </HeaderList>
          <HeaderList>
            <HeaderListItem>
              <Link to={"admin/login"}>{t("For Employers")}</Link>
            </HeaderListItem>
            <HeaderListItem>
              {token ? (
                <HeaderAccount>
                  <FaRegUserCircle className="avatar" />
                  <span>{username}</span>
                  <IoIosArrowDown className="arrow" />
                  <HeaderSubmenu className="submenu">
                    <li onClick={() => navigate(`/settings/${id}`)}>
                      <FiSettings />
                      <span>{t("Settings")}</span>
                    </li>
                    <li onClick={handleLogout}>
                      <FiLogOut />
                      <span>{t("Sign out")}</span>
                    </li>
                  </HeaderSubmenu>
                </HeaderAccount>
              ) : (
                <Link to={"login"}>{t("Sign in/Sign up")}</Link>
              )}
            </HeaderListItem>
            <HeaderLanguage>
              <div className="language-input">
                <input
                  type="radio"
                  id="en"
                  name="language"
                  onChange={() => handleLanguage("en")}
                />
                <label htmlFor="en">EN</label>
              </div>
              <div className="reparate"></div>
              <div className="language-input">
                <input
                  type="radio"
                  id="vi"
                  name="language"
                  onChange={() => handleLanguage("vi")}
                  defaultChecked
                />
                <label htmlFor="vi">VI</label>
              </div>
            </HeaderLanguage>
          </HeaderList>
        </HeaderNavbar>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
