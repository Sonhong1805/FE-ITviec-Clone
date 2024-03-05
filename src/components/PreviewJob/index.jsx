import { Link, useNavigate } from "react-router-dom";
import {
  BorderDash,
  PreviewCompanyInfo,
  PreviewJobBody,
  PreviewJobCompany,
  PreviewJobContainer,
  PreviewJobHeader,
  PreviewJobOverview,
  PreviewJobReasons,
  PreviewJobRecruitment,
} from "./styled";
import { LuCircleDollarSign } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { FaRegHeart, FaRegClock, FaHeart } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { getPostedTime } from "../../helpers/getPostedTime";
import { getCookie } from "../../helpers/cookie";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getUserDetail, updateUser } from "../../services/userService";
import { useTranslation } from "react-i18next";
import _ from "lodash";

const PreviewJob = (props) => {
  const { loading, company, currentJob } = props;
  const { t, i18n } = useTranslation(["search"]);
  const language = i18n.language;
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [favourite, setFavourite] = useState(false);

  const token = getCookie("token");
  const id = getCookie("id");

  useEffect(() => {
    const fetchData = async () => {
      const userDetail = await getUserDetail(id);
      if (userDetail) {
        setCurrentUser(userDetail);
        const checkFavourite = userDetail.favourites?.some(
          (favourite) => favourite === currentJob.id
        );
        setFavourite(checkFavourite);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentJob]);

  const handleApply = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate(`/cv/${currentJob.id}`);
    }
  };

  const handleFavourite = async () => {
    if (!token) {
      navigate("/login");
    } else {
      const currentFavourite = currentUser.favourites || [];
      currentFavourite.push(currentJob.id);
      const options = {
        favourites: currentFavourite,
      };
      await updateUser(options, currentUser.id);
      setFavourite(true);
    }
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

  const formattedSalary = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(currentJob?.salary);

  return (
    <>
      {loading ? (
        <PreviewJobContainer>
          <PreviewJobHeader>
            <PreviewJobCompany>
              <Skeleton className="logo-company" />
            </PreviewJobCompany>
          </PreviewJobHeader>
          <PreviewJobBody>
            <Skeleton style={{ minHeight: "41.2rem" }} />
          </PreviewJobBody>
        </PreviewJobContainer>
      ) : (
        _.isEmpty(company) || (
          <PreviewJobContainer>
            <PreviewJobHeader>
              <PreviewJobCompany>
                <Link to={`/company/${company?.id}`} className="logo-company">
                  <img src={company?.thumbnail} alt="logo-company" />
                </Link>
                <div className="job-info">
                  <h2 className="job-name">{currentJob?.name}</h2>
                  <Link to={`/company/${company?.id}`} className="company-name">
                    {company?.name}
                  </Link>
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
                </div>
              </PreviewJobCompany>
              <PreviewJobRecruitment>
                <button onClick={handleApply}>{t("Apply now")}</button>
                {favourite ? (
                  <FaHeart onClick={handleUnfavourite} />
                ) : (
                  <FaRegHeart onClick={handleFavourite} />
                )}
              </PreviewJobRecruitment>
            </PreviewJobHeader>
            <PreviewJobBody>
              <PreviewJobOverview>
                <div className="overview-item">
                  <GrLocation />
                  <div>
                    <span>
                      {company?.address?.map((item) => item).join(", ")}
                    </span>
                  </div>
                </div>
                <div className="overview-item">
                  <HiOutlineBuildingOffice2 />
                  <span>
                    {t(`Working Model.${company?.formOfWork?.value}`)}
                  </span>
                </div>
                <div className="overview-item">
                  <FaRegClock />
                  <span>{getPostedTime(new Date(currentJob?.createdAt))}</span>
                </div>
                <div className="overview-item">
                  <span>{t("Skills")}:</span>
                  <ul>
                    {currentJob?.tags?.map((tag, index) => (
                      <li key={index}>
                        <Link to={`/search?keywords=${tag}`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </PreviewJobOverview>
              <BorderDash></BorderDash>
              <PreviewJobReasons>
                <h2>
                  {" "}
                  {language === "en" ? (
                    <span>
                      Top {company?.reasons?.length} reasons to join us
                    </span>
                  ) : (
                    <span>
                      {company?.reasons?.length} Lý do để gia nhập công ty
                    </span>
                  )}
                </h2>
                <ul>
                  {company?.reasons?.map((reason, index) => (
                    <li key={index}>{reason}</li>
                  ))}
                </ul>
              </PreviewJobReasons>
              <BorderDash></BorderDash>
              <PreviewJobReasons>
                <h2>{t("Job description")}</h2>
                <ul>
                  {company?.descriptions?.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </PreviewJobReasons>
              <BorderDash></BorderDash>
              <PreviewCompanyInfo>
                <div className="company-name">
                  <h2>{company?.name}</h2>
                  <Link to={`/company/${company?.id}`}>
                    <span>{t("View company")}</span>
                    <FaArrowUpRightFromSquare />
                  </Link>
                </div>
                <p className="company-intro">
                  No.1 Construction Tech Company in Japan
                </p>
                <div className="company-grid">
                  <div>
                    <small>{t("Introduce.Company type")}</small>
                    <p>{company?.model}</p>
                  </div>
                  <div>
                    <small>{t("Introduce.Company size")}</small>
                    <p>{company?.companySize}</p>
                  </div>
                  <div>
                    <small>{t("Introduce.Country")}</small>
                    <p>{company?.country}</p>
                  </div>
                  <div>
                    <small>{t("Introduce.Working days")}</small>
                    <p>{company?.workingTime}</p>
                  </div>
                  <div>
                    <small>{t("Introduce.Overtime policy")}</small>
                    <p>{company?.workOvertime}</p>
                  </div>
                </div>
              </PreviewCompanyInfo>
            </PreviewJobBody>
          </PreviewJobContainer>
        )
      )}
    </>
  );
};

export default PreviewJob;
