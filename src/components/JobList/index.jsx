import { Link } from "react-router-dom";
import { JobCard, JobEmpty, JobListContainer } from "./styled";

import { LuCircleDollarSign } from "react-icons/lu";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GrLocation } from "react-icons/gr";
import { ImFire } from "react-icons/im";
import { getPostedTime } from "../../helpers/getPostedTime";
import { getCookie } from "../../helpers/cookie";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTranslation } from "react-i18next";
import robby_404 from "/assets/svg/robby-404.svg";

const JobList = (props) => {
  const { loading, jobs, onHandleGetJob, currentJob } = props;
  const { t } = useTranslation(["search"]);
  const token = getCookie("token");

  const jobFilter = jobs.filter((job) => job);

  return (
    <>
      {" "}
      {loading ? (
        <JobListContainer>
          <Skeleton
            count={8}
            style={{ minHeight: "31.2rem", marginBottom: ".8rem" }}
          />
        </JobListContainer>
      ) : (
        <JobListContainer className={jobFilter.length === 0 ? "empty" : ""}>
          {jobFilter.length > 0 ? (
            <>
              {jobFilter.map((job) => {
                const formattedSalary = new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(job?.salary);
                return (
                  <JobCard
                    key={job?.id}
                    className={job?.id === currentJob?.id ? "active" : ""}
                    onClick={() => onHandleGetJob(job)}>
                    <div className="posted-time">
                      {t("Posted")} {getPostedTime(new Date(job?.createdAt))}
                    </div>
                    <Link to={`/job/${job?.id}`} className="job-name">
                      {job?.name}
                    </Link>
                    <div className="job-company">
                      <Link
                        to={`/company/${job?.company?.id}`}
                        className="logo-company">
                        <img src={job?.company?.thumbnail} alt="logo" />
                      </Link>
                      <Link
                        to={`/company/${job?.company?.id}`}
                        className="name-company">
                        {job?.company?.name}
                      </Link>
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
                    <div className="form-of-work">
                      <HiOutlineBuildingOffice2 />
                      <span>
                        {t(`Working Model.${job?.company?.formOfWork?.value}`)}
                      </span>
                    </div>
                    <div className="job-address">
                      <GrLocation />
                      <span>
                        {job?.city?.map((address) => address).join(" - ")}
                      </span>
                    </div>
                    <ul className="job-tags">
                      {job?.tags?.map((tag, index) => (
                        <li key={index}>
                          <Link to={`/search?keywords=${tag}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                    <div className="job-label">
                      <div className="label-content">
                        <ImFire />
                        <span>super hot</span>
                      </div>
                    </div>
                  </JobCard>
                );
              })}
            </>
          ) : (
            <JobEmpty>
              <figure>
                <img src={robby_404} />
                <figcaption>Không tìm thấy kết quả nào phù hợp</figcaption>
              </figure>
            </JobEmpty>
          )}
        </JobListContainer>
      )}
    </>
  );
};

export default JobList;
