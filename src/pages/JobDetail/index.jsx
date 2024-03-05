import { Link, useNavigate, useParams } from "react-router-dom";
import {
  BorderDash,
  JobDetailBody,
  JobDetailCircle,
  JobDetailContainer,
  JobDetailEmployer,
  JobDetailEmployerInfo,
  JobDetailHeader,
  JobDetailLeft,
  JobDetailOverview,
  JobDetailRecruitment,
  JobDetailRight,
  JobDetailWrapper,
} from "./styled";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaRegHeart, FaRegClock, FaHeart } from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getJobDetail } from "../../services/jobService";
import { getCompanyDetail } from "../../services/companyService";
import { getCookie } from "../../helpers/cookie";
import { getPostedTime } from "../../helpers/getPostedTime";
import { getUserDetail, updateUser } from "../../services/userService";
import { useTranslation } from "react-i18next";

const JobDetail = () => {
  const { id: idParam } = useParams();
  const [currentJob, setCurrentJob] = useState();
  const navigate = useNavigate();
  const [currentCompany, setCurrentCompany] = useState();
  const [currentUser, setCurrentUser] = useState();
  const [favourite, setFavourite] = useState(false);

  const { t, i18n } = useTranslation(["search"]);
  const language = i18n.language;

  const token = getCookie("token");
  const id = getCookie("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [jobDetail, userDetail] = await Promise.all([
          getJobDetail(idParam),
          getUserDetail(id),
        ]);
        if (jobDetail && userDetail) {
          const companyDetail = await getCompanyDetail(jobDetail.idCompany);
          setCurrentJob(jobDetail);
          setCurrentCompany(companyDetail);
          setCurrentUser(userDetail);
          const checkFavourite = userDetail?.favourites?.some(
            (favourite) => favourite === jobDetail.id
          );
          setFavourite(checkFavourite);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idParam]);

  const handleApply = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/cv/${idParam}`);
    }
  };

  const handleFavourite = async () => {
    const currentFavourite = currentUser.favourites || [];
    currentFavourite.push(currentJob.id);
    const options = {
      favourites: currentFavourite,
    };
    await updateUser(options, currentUser.id);
    setFavourite(true);
  };

  const handleUnfavourite = async () => {
    const currentFavourite = currentUser.favourites || [];
    const unfavourite = currentFavourite.filter(
      (favourite) => favourite !== currentJob.id
    );
    const options = {
      favourites: unfavourite,
    };
    await updateUser(options, currentUser.id);
    setFavourite(false);
  };

  return (
    <JobDetailWrapper>
      <JobDetailContainer>
        <JobDetailRight>
          <JobDetailHeader>
            <h1>{currentJob?.name}</h1>
            <p>{currentCompany?.name}</p>
            <div className="job-salary">
              {token ? (
                <span className="salary-show">
                  <LuCircleDollarSign />
                  {new Intl.NumberFormat("en-IN", {
                    maximumSignificantDigits: 3,
                  }).format(currentJob?.salary)}{" "}
                  USD
                </span>
              ) : (
                <Link to={"/login"} className="salary-hide">
                  <LuCircleDollarSign />
                  {t("Sign in to view salary")}
                </Link>
              )}
            </div>
            <JobDetailRecruitment>
              <button onClick={handleApply}>{t("Apply now")}</button>
              {favourite ? (
                <FaHeart onClick={handleUnfavourite} />
              ) : (
                <FaRegHeart onClick={handleFavourite} />
              )}
            </JobDetailRecruitment>
          </JobDetailHeader>
          <JobDetailBody>
            <div className="job-info">
              <GrLocation />
              <span>{currentJob?.city.map((c) => c).join(" - ")}</span>
            </div>
            <div className="job-info">
              <HiOutlineBuildingOffice2 />
              <span>
                {t(`Working Model.${currentCompany?.formOfWork?.value}`)}
              </span>
            </div>
            <div className="job-info">
              <FaRegClock />
              <span>
                {" "}
                {t("Posted")} {getPostedTime(new Date(currentJob?.createdAt))}
              </span>
            </div>
            <div className="job-tags">
              <span>{t("Skills")}:</span>
              <ul>
                {currentJob?.tags.map((tag, index) => (
                  <li key={index}>
                    <Link to={`/search?keywords=${tag}`}>{tag}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </JobDetailBody>
          <JobDetailOverview>
            <div className="overview-item">
              <h2>{t("Job description")}</h2>
              <ul>
                {currentJob?.descriptions.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
            <BorderDash></BorderDash>
            <div className="overview-item">
              <h2>{t("Job description")}</h2>
              <ul>
                {currentJob?.jobRequirements.map((require, index) => (
                  <li key={index}>{require}</li>
                ))}
              </ul>
            </div>
            <BorderDash></BorderDash>
            <div className="overview-item">
              <h2>
                {" "}
                {language === "en" ? (
                  <span>
                    Top {currentJob?.reasons?.length} reasons to join us
                  </span>
                ) : (
                  <span>
                    {currentJob?.reasons?.length} Lý do để gia nhập công ty
                  </span>
                )}
              </h2>
              <ul>
                {currentJob?.reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          </JobDetailOverview>
        </JobDetailRight>
        <JobDetailLeft>
          <JobDetailEmployer>
            <Link className="company-logo">
              <img src={"../" + currentCompany?.thumbnail} alt="logo-company" />
            </Link>
            <div className="company-info">
              <h3>{currentCompany?.name}</h3>
              <Link to={`/company/${currentCompany?.id}`}>
                <span>{t("View company")}</span>
                <FaArrowUpRightFromSquare />
              </Link>
            </div>
          </JobDetailEmployer>
          <p>{currentCompany?.name}</p>
          <JobDetailEmployerInfo>
            <div className="employer-item">
              <div className="company-title">{t("Introduce.Company type")}</div>
              <div>{currentCompany?.model}</div>
            </div>
            <div className="employer-item">
              <div className="company-title">{t("Introduce.Company size")}</div>
              <div>{currentCompany?.companySize}</div>
            </div>
            <div className="employer-item">
              <div className="company-title">{t("Introduce.Country")}</div>
              <div>{currentCompany?.country}</div>
            </div>
            <div className="employer-item">
              <div className="company-title">{t("Introduce.Working days")}</div>
              <div>{currentCompany?.workingTime}</div>
            </div>
            <div className="employer-item">
              <div className="company-title">
                {t("Introduce.Overtime policy")}
              </div>
              <div>{currentCompany?.workOvertime}</div>
            </div>
          </JobDetailEmployerInfo>
        </JobDetailLeft>
      </JobDetailContainer>
      <JobDetailCircle></JobDetailCircle>
    </JobDetailWrapper>
  );
};

export default JobDetail;
