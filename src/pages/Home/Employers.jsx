import { IoIosArrowForward } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";
import {
  EmployerCard,
  EmployerContainer,
  EmployerFigure,
  EmployerFooter,
  EmployerGrid,
  EmployerHeading,
  EmployerTags,
} from "./Employers.styled";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { getCompanyList } from "../../services/companyService";
import { getJobsCompany } from "../../services/jobService";
import bg_employee from "../../../public/assets/svg/bg_employee.svg";
import Skeleton from "react-loading-skeleton";

const Employers = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState();
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await getCompanyList();
      const companyWithJobs = await Promise.all(
        response.map(async (company) => {
          const jobList = await getJobsCompany(company.id);
          return { ...company, jobs: jobList };
        })
      );
      if (companyWithJobs) {
        setCompanyList(companyWithJobs);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section>
      <EmployerHeading>{t("Top Employers")}</EmployerHeading>
      <EmployerContainer>
        <EmployerCard to={`/company/${companyList[11]?.id}`}>
          <EmployerGrid>
            <img src={bg_employee} alt="grid" />
          </EmployerGrid>
          <EmployerFigure>
            {loading ? (
              <Skeleton style={{ minHeight: "16rem" }} />
            ) : (
              <img src={companyList[11]?.thumbnail} alt="logo-company" />
            )}
          </EmployerFigure>
          <p className="name-company">{companyList[11]?.name}</p>
          <EmployerTags>
            <ul>
              {companyList[11]?.specialize.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </EmployerTags>
          <EmployerFooter>
            <div className="employer-address">
              {companyList[11]?.address.map((item) => item).join(" - ")}
            </div>
            <div className="number-of-jobs">
              <FaRegDotCircle />
              <span>
                {companyList[11]?.jobs.length} {t("Jobs")}
              </span>
              <IoIosArrowForward />
            </div>
          </EmployerFooter>
        </EmployerCard>
        <EmployerCard to={`/company/${companyList[4]?.id}`}>
          <EmployerGrid>
            <img src={bg_employee} alt="grid" />
          </EmployerGrid>
          <EmployerFigure>
            {loading ? (
              <Skeleton style={{ minHeight: "16rem" }} />
            ) : (
              <img src={companyList[4]?.thumbnail} alt="logo-company" />
            )}
          </EmployerFigure>
          <p className="name-company">{companyList[4]?.name}</p>
          <EmployerTags>
            <ul>
              {companyList[4]?.specialize.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </EmployerTags>
          <EmployerFooter>
            <div className="employer-address">
              {companyList[4]?.address.map((item) => item).join(" - ")}
            </div>
            <div className="number-of-jobs">
              <FaRegDotCircle />
              <span>
                {companyList[4]?.jobs.length} {t("Jobs")}
              </span>
              <IoIosArrowForward />
            </div>
          </EmployerFooter>
        </EmployerCard>
        <EmployerCard to={`/company/${companyList[13]?.id}`}>
          <EmployerGrid>
            <img src={bg_employee} alt="grid" />
          </EmployerGrid>
          <EmployerFigure>
            {loading ? (
              <Skeleton style={{ minHeight: "16rem" }} />
            ) : (
              <img src={companyList[13]?.thumbnail} alt="logo-company" />
            )}
          </EmployerFigure>
          <p className="name-company">{companyList[13]?.name}</p>
          <EmployerTags>
            <ul>
              {companyList[13]?.specialize.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </EmployerTags>
          <EmployerFooter>
            <div className="employer-address">
              {companyList[13]?.address.map((item) => item).join(" - ")}
            </div>
            <div className="number-of-jobs">
              <FaRegDotCircle />
              <span>
                {companyList[13]?.jobs.length} {t("Jobs")}
              </span>
              <IoIosArrowForward />
            </div>
          </EmployerFooter>
        </EmployerCard>
      </EmployerContainer>
    </section>
  );
};

export default Employers;
