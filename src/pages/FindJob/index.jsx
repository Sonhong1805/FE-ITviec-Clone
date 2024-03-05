import { useEffect, useState } from "react";
import { FindWrapper } from "./styled";
import { getTagList } from "../../services/tagService";
import { getCompanyList } from "../../services/companyService";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FindJob = () => {
  const { field } = useParams();
  const [allTag, setAllTag] = useState([]);
  const [allCompany, setAllCompany] = useState([]);
  const { i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      const [tagList, companyList] = await Promise.all([
        getTagList(),
        getCompanyList(),
      ]);
      if (tagList) {
        setAllTag(tagList);
      }
      if (companyList) {
        setAllCompany(companyList);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {field === "skill" && (
        <FindWrapper>
          {language === "en" ? (
            <h1>Jobs by Skill</h1>
          ) : (
            <h1>Tìm việc làm IT theo kỹ năng</h1>
          )}
          <ul>
            {allTag.map((tag) => (
              <li key={tag.key}>
                <Link to={`/search?keywords=${tag.value}`}>{tag.value}</Link>
              </li>
            ))}
          </ul>
        </FindWrapper>
      )}
      {field === "company" && (
        <FindWrapper>
          {language === "en" ? (
            <h1>Jobs by Company</h1>
          ) : (
            <h1>Tìm việc làm IT theo tên công ty</h1>
          )}
          <ul>
            {allCompany.map((company) => (
              <li key={company.id}>
                <Link to={`/job/${company.id}`}>{company.name}</Link>
              </li>
            ))}
          </ul>
        </FindWrapper>
      )}
    </>
  );
};

export default FindJob;
