import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { GoTasklist } from "react-icons/go";
import { RiUserFollowLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import { DashboardCard, DashboardContainer, DashboardContent } from "./styled";
import { getJobsCompany } from "../../services/jobService";
import { getCompanyDetail } from "../../services/companyService";
import { useNavigate } from "react-router-dom";
import Chart from "./Chart";

const Dashboard = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState({});
  const [CVs, setCVs] = useState({});
  const [follow, setFollow] = useState(0);
  const idCompany = +getCookie("idCompany");

  useEffect(() => {
    if (idCompany) {
      const fetchData = async () => {
        const [jobsCompany, companyDetail] = await Promise.all([
          getJobsCompany(idCompany),
          getCompanyDetail(idCompany),
        ]);

        if (jobsCompany && companyDetail) {
          let objJobs = {
            total: 0,
            on: 0,
            off: 0,
          };
          objJobs.total = jobsCompany.length;
          jobsCompany.forEach((job) => {
            job.status ? objJobs.on++ : objJobs.off++;
          });
          setJobs(objJobs);

          let objCVs = {
            total: 0,
            readed: 0,
            unread: 0,
          };
          const allCV = jobsCompany
            .map((jobs) => jobs.cv)
            .flat()
            .filter((cv) => cv);

          objCVs.total = allCV.length;
          allCV.forEach((cv) => {
            cv.statusRead ? objCVs.readed++ : objCVs.unread++;
          });
          setCVs(objCVs);

          setFollow(companyDetail.followers.length ?? 0);
        }
      };
      fetchData();
    } else {
      navigate("/admin/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idCompany]);

  return (
    <DashboardContainer>
      <DashboardContent>
        <DashboardCard>
          <div>
            <h2>Số lượng việc làm: {jobs.total}</h2>
            <p>
              Việc làm đang bật: <strong>{jobs.on}</strong>
            </p>
            <p>
              Việc làm đã tắt: <strong>{jobs.off}</strong>
            </p>
          </div>
          <GoTasklist className="job" />
        </DashboardCard>
        <DashboardCard>
          <div>
            <h2>Số lượng CV: {CVs.total}</h2>
            <p>
              CV đã xem: <strong>{CVs.readed}</strong>
            </p>
            <p>
              CV chưa xem: <strong>{CVs.unread}</strong>
            </p>
          </div>
          <FaUsers className="cv" />
        </DashboardCard>
        <DashboardCard>
          <div>
            <h2>Số lượng theo dõi</h2>
            <p>
              <span>Đã có </span>
              <strong>{follow}</strong> <span>người theo dõi</span>
            </p>
            <p className="hide">.</p>
          </div>
          <RiUserFollowLine className="follow" />
        </DashboardCard>
      </DashboardContent>
      <Chart />
    </DashboardContainer>
  );
};

export default Dashboard;
