import { JobContainer, SearchResultContainer } from "./SearchResult.styled";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getJobList } from "../../services/jobService";
import { getCompanyDetail } from "../../services/companyService";
import JobList from "../../components/JobList";
import PreviewJob from "../../components/PreviewJob";
import SearchFilter from "../../components/SearchFilter";
import "rc-slider/assets/index.css";
import { getJobs, getLength } from "../../helpers/getJobs";
import PaginationBar from "../../components/PaginationBar";

const SearchResult = () => {
  const [param] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [currentJob, setCurrentJob] = useState({});
  const [jobs, setJobs] = useState([]);
  const [jobsTmp, setJobsTmp] = useState([]);
  const [company, setCompany] = useState({});
  const [page, setPage] = useState(1);
  const [limit] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const jobResponse = await getJobList();
        if (jobResponse) {
          const jobFilter = jobResponse.filter((job) => {
            const keywordsParam = param.get("keywords");
            const cityParam = param.get("city");

            const keywords = keywordsParam
              ? job.tags.some((tag) =>
                  tag.toLowerCase().includes(keywordsParam.toLowerCase())
                )
              : true;
            const city = cityParam
              ? job.city.some((city) =>
                  city.toLowerCase().includes(cityParam.toLowerCase())
                )
              : true;
            const status = job.status;
            return keywords && city && status;
          });

          const jobsWithCompany = await Promise.all(
            jobFilter.map(async (job) => {
              const companyDetail = await getCompanyDetail(job.idCompany);
              return { ...job, company: { ...companyDetail } };
            })
          );
          setLoading(false);
          setJobs(jobsWithCompany);
          setJobsTmp(jobsWithCompany);
          setCurrentJob(jobsWithCompany[0]);
          setCompany(jobsWithCompany[0].company);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [param]);

  useEffect(() => {
    if (jobs.length > 0) {
      setCurrentJob(getJobs(jobs, page, limit)[0]);
      setCompany(getJobs(jobs, page, limit)[0]?.company);
    }
  }, [jobs, page, limit]);

  const handleGetJob = (job) => {
    setCurrentJob(job);
    setCompany(job?.company);
  };

  const totalPage = Math.ceil(getLength(jobs) / limit);
  const handlePageChange = (value) => {
    if (value === "prev") {
      if (page > 1) {
        setPage(page - 1);
      }
    } else if (value === "next") {
      if (page < totalPage) {
        setPage(page + 1);
      }
    } else {
      setPage(value);
    }
  };

  return (
    <SearchResultContainer>
      <SearchFilter
        param={param}
        jobs={jobs}
        setJobs={setJobs}
        jobsTmp={jobsTmp}
        setCurrentJob={setCurrentJob}
        setCompany={setCompany}
      />
      <JobContainer>
        <JobList
          loading={loading}
          jobs={getJobs(jobs, page, limit)}
          currentJob={currentJob}
          onHandleGetJob={handleGetJob}
        />
        <PreviewJob
          jobs={getJobs(jobs, page, limit)}
          loading={loading}
          company={company}
          setCurrentJob={setCurrentJob}
          currentJob={currentJob}
        />
      </JobContainer>
      {getJobs(jobs, page, limit).filter((job) => job).length > 0 && (
        <PaginationBar
          totalPage={totalPage}
          page={page}
          limit={limit}
          siblings={1}
          onPageChange={handlePageChange}
        />
      )}
    </SearchResultContainer>
  );
};

export default SearchResult;
