import { Link, useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { PiSuitcase } from "react-icons/pi";
import { FiGlobe } from "react-icons/fi";
import { LuCircleDollarSign } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import {
  CompanyDetailAside,
  CompanyDetailContainer,
  CompanyDetailWrapper,
  CompanyInfoContainer,
  CompanyInfoMain,
  CompanyReasons,
  CompanySpecialize,
  EmployerBg,
  EmployerButtons,
  EmployerContainer,
  EmployerGroup,
  EmployerInfo,
  EmployerShow,
  GeneralInformation,
  JobCard,
  JobListing,
} from "./styled";
import { useEffect, useState } from "react";
import { getJobsCompany } from "../../services/jobService";
import { getCompanyDetail, updateCompany } from "../../services/companyService";
import { getCookie } from "../../helpers/cookie";
import { getPostedTime } from "../../helpers/getPostedTime";
import { FiCheck, FiX } from "react-icons/fi";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const CompanyDetail = () => {
  const { id: idParams } = useParams();
  const [jobList, setjobList] = useState([]);
  const [currentCompany, setCurrentCompany] = useState([]);
  const [follow, setFollow] = useState(false);
  const token = getCookie("token");
  const id = +getCookie("id");

  const { t } = useTranslation(["search"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companyDetail, jobsCompany] = await Promise.all([
          getCompanyDetail(idParams),
          getJobsCompany(idParams),
        ]);

        if (companyDetail && jobsCompany) {
          setCurrentCompany(companyDetail);
          setjobList(jobsCompany);
          const checkFollow = companyDetail.followers?.some(
            (follow) => follow === id
          );
          setFollow(checkFollow);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idParams, id]);

  const handleFollow = async () => {
    const currentFollow = currentCompany.followers;
    currentFollow.push(id);
    const options = {
      followers: currentFollow,
    };
    const response = await updateCompany(options, idParams);
    if (response) {
      toast.success("Theo dõi thành công!", {
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
      setFollow(true);
    }
  };

  const handleUnfollow = async () => {
    const currentFollow = currentCompany.followers;
    const deletefollow = currentFollow.filter((follow) => follow !== id);
    const options = {
      followers: deletefollow,
    };
    const response = await updateCompany(options, idParams);
    if (response) {
      toast.success("Huỷ theo dõi thành công!", {
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
      setFollow(false);
    }
  };

  return (
    <CompanyDetailWrapper>
      <CompanyDetailContainer>
        <EmployerBg>
          <EmployerContainer>
            <Link className="company-logo">
              <img src={"../" + currentCompany?.thumbnail} alt="company-logo" />
            </Link>
            <EmployerInfo>
              <h1>{currentCompany?.name}</h1>
              <EmployerGroup>
                <EmployerShow>
                  <GrLocation />
                  <span>
                    {currentCompany?.address?.map((item) => item).join(", ")}
                  </span>
                </EmployerShow>
                <EmployerShow>
                  <PiSuitcase />
                  <span className="quantity">
                    {jobList?.length} {t("job openings")}
                  </span>
                </EmployerShow>
              </EmployerGroup>
              <EmployerButtons>
                {follow ? (
                  <div className="follow-group">
                    <button className="btn-followed">
                      <FiCheck />
                      <span>{t("Following")}</span>
                    </button>
                    <button className="btn-unfollow" onClick={handleUnfollow}>
                      <FiX />
                      <span>{t("Unfollow")}</span>
                    </button>
                  </div>
                ) : (
                  <button className="btn-follow" onClick={handleFollow}>
                    {t("Follow")}
                  </button>
                )}
              </EmployerButtons>
            </EmployerInfo>
          </EmployerContainer>
        </EmployerBg>
      </CompanyDetailContainer>
      <CompanyInfoContainer>
        <CompanyInfoMain>
          <GeneralInformation>
            <h2>{t("General information")}</h2>
            <div className="general-body">
              <div>
                <div className="general-title">
                  {t("Introduce.Company type")}
                </div>
                <p>{currentCompany?.model}</p>
              </div>
              <div>
                <div className="general-title">
                  {t("Introduce.Company size")}
                </div>
                <p>{currentCompany?.companySize}</p>
              </div>
              <div>
                <div className="general-title">{t("Introduce.Country")}</div>
                <p>{currentCompany?.country}</p>
              </div>
              <div>
                <div className="general-title">
                  {t("Introduce.Working days")}
                </div>
                <p>{currentCompany?.workingTime}</p>
              </div>
              <div>
                <div className="general-title">
                  {t("Introduce.Overtime policy")}
                </div>
                <p>{currentCompany?.workOvertime}</p>
              </div>
            </div>
          </GeneralInformation>
          <CompanyReasons>
            <h2>{t("Company overview")}</h2>
            <ul>
              {currentCompany?.descriptions?.map((description, index) => (
                <li key={index}>{description}</li>
              ))}
            </ul>
          </CompanyReasons>
          <CompanyReasons>
            <h2>{t("Why you'll love working here")}</h2>
            <ul>
              {currentCompany?.reasons?.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
            <Link to={currentCompany?.website} className="company-path">
              <FiGlobe />
              <span>{t("Company website")}</span>
            </Link>
          </CompanyReasons>
          <CompanySpecialize>
            <h2>{t("Our key skills")}</h2>
            <p>{t("Our key skills")}</p>
            <ul>
              <ul>
                {currentCompany?.specialize?.map((skill, index) => (
                  <li key={index}>
                    <Link to={`/search?keywords=${skill}`}>{skill}</Link>
                  </li>
                ))}
              </ul>
            </ul>
          </CompanySpecialize>
        </CompanyInfoMain>
        <CompanyDetailAside>
          <h2>
            {jobList.length} {t("job openings")}
          </h2>
          <JobListing>
            {jobList?.map((job) => {
              const formattedSalary = new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(job?.salary);
              return (
                <JobCard key={job.id}>
                  <div className="posted-time">
                    {t("Posted")} {getPostedTime(new Date(job.createdAt))}
                  </div>
                  <h3>
                    <Link to={`/job/${job.id}`}>{job.name}</Link>
                  </h3>
                  <div className="company-info">
                    <Link className="company-logo">
                      <img
                        src={"../" + currentCompany?.thumbnail}
                        alt="logo-company"
                      />
                    </Link>
                    <Link className="company-name">{currentCompany?.name}</Link>
                  </div>
                  <div className="job-salary">
                    {token ? (
                      <span className="salary-show">
                        <LuCircleDollarSign />
                        {+formattedSalary === 0 ? (
                          <>You&apos;ll love it</>
                        ) : (
                          <>{formattedSalary} USD</>
                        )}
                      </span>
                    ) : (
                      <Link to={"/login"} className="salary-hide">
                        <LuCircleDollarSign />
                        {t("Sign in to view salary")}
                      </Link>
                    )}
                  </div>
                  <div className="border-dash"></div>
                  <div className="company-overview">
                    <div className="overview-item">
                      <HiOutlineBuildingOffice2 />
                      <span>
                        {t(
                          `Working Model.${currentCompany?.formOfWork?.value}`
                        )}
                      </span>
                    </div>
                    <div className="overview-item">
                      <GrLocation />
                      <span>{job?.city?.map((c) => c).join(" - ")}</span>
                    </div>
                  </div>
                  <ul>
                    {job?.tags?.map((tag, index) => (
                      <li key={index}>
                        <Link to={`/search?keywords=${tag}`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </JobCard>
              );
            })}
          </JobListing>
        </CompanyDetailAside>
      </CompanyInfoContainer>
      <ToastContainer />
    </CompanyDetailWrapper>
  );
};

export default CompanyDetail;
