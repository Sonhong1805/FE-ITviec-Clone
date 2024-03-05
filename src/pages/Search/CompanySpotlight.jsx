import { GrLocation } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import {
  CompanySpotlightContainer,
  CompanySpotlightInfo,
  CompanySpotlightItem,
  CompanySpotlightJobs,
  CompanySpotlightLogo,
  CompanySpotlightThumbnail,
  CompanySpotlightWrapper,
} from "./CompanySpotlight.styled";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getJobsCompany } from "../../services/jobService";
import HBS_Logo from "/assets/images/HBS-Logo.jpg";

const CompanySpotlight = () => {
  const { t } = useTranslation(["search"]);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getJobsCompany(9);
      if (response) {
        setJobs(response);
      }
    };
    fetchData();
  }, []);

  return (
    <CompanySpotlightWrapper>
      <CompanySpotlightContainer>
        <CompanySpotlightItem>
          <CompanySpotlightThumbnail>
            <img src="/assets/images/company-spotlight.jpg" alt="company" />
            <figcaption>{t("Company Spotlight")}</figcaption>
          </CompanySpotlightThumbnail>
          <CompanySpotlightLogo>
            <img src={HBS_Logo} alt="company-logo" />
          </CompanySpotlightLogo>
        </CompanySpotlightItem>
        <CompanySpotlightItem>
          <CompanySpotlightInfo>
            <Link className="company-name">
              Samsung Electronics HCMC CE Complex
            </Link>
            <div className="company-location">
              <GrLocation />
              <span>Ho Chi Minh</span>
            </div>
            <p>Samsung Electronics HCMC CE Complex</p>
            <Link to={"/company/9"} className="quantity-jobs">
              <span>
                {t("View")} {jobs.length} {t("Jobs")}
              </span>
              <IoIosArrowForward />
            </Link>
          </CompanySpotlightInfo>
        </CompanySpotlightItem>
        <CompanySpotlightItem>
          <CompanySpotlightJobs>
            <div className="job-item">
              <IoArrowForwardCircleOutline />
              <span>Embedded Software Engineer</span>
            </div>
            <div className="job-item">
              <IoArrowForwardCircleOutline />
              <span>C++ Developer</span>
            </div>
            <div className="job-item">
              <IoArrowForwardCircleOutline />
              <span>Embedded Project Management</span>
            </div>
          </CompanySpotlightJobs>
        </CompanySpotlightItem>
      </CompanySpotlightContainer>
    </CompanySpotlightWrapper>
  );
};

export default CompanySpotlight;
