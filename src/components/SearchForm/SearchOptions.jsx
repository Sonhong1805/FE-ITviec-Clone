import { useEffect, useState } from "react";
import { OptionItem, OptionList, OptionTitle } from "./styled";
import { getTagList } from "../../services/tagService";
import { getCompanyList } from "../../services/companyService";
import { useNavigate } from "react-router-dom";

const SearchOptions = ({ keywords, setIsInputFocused }) => {
  const [allTag, setAllTag] = useState([]);
  const [allCompany, setAllCompany] = useState([]);
  const navigate = useNavigate();

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

  const filtersTag = allTag.filter((tag) => {
    if (keywords !== "")
      return tag.value.toLowerCase().includes(keywords.toLowerCase());
  });

  const filtersCompany = allCompany.filter((company) => {
    if (keywords !== "") {
      return company.name.toLowerCase().includes(keywords.toLowerCase());
    }
  });

  const MAX_OPTIONS = 8;
  const totalOptions = filtersTag.length + filtersCompany.length;

  let filteredTags = filtersTag;
  let filteredCompanies = filtersCompany;
  if (totalOptions > MAX_OPTIONS) {
    const tagCount = Math.min(MAX_OPTIONS, filtersTag.length);
    filteredTags = filtersTag.slice(0, tagCount);

    const companyCount = Math.min(
      MAX_OPTIONS - tagCount,
      filtersCompany.length
    );
    filteredCompanies = filtersCompany.slice(0, companyCount);
  }

  const handleClickOption = (field, value) => {
    setIsInputFocused(false);
    if (field === "tag") {
      navigate(`/search?keywords=${value}`);
    }
    if (field === "company") {
      navigate(`/company/${value}`);
    }
  };

  return (
    (filteredTags.length > 0 || filteredCompanies.length > 0) && (
      <OptionList>
        {filteredTags.length > 0 && (
          <>
            <OptionTitle>Skill and title</OptionTitle>
            {filteredTags.map((tag) => (
              <OptionItem
                onClick={() => handleClickOption("tag", tag.value)}
                key={tag.key}>
                {tag.value}
              </OptionItem>
            ))}
          </>
        )}
        {filteredCompanies.length > 0 && (
          <>
            <OptionTitle>Company</OptionTitle>
            {filteredCompanies.map((company) => (
              <OptionItem
                onClick={() => handleClickOption("company", company.id)}
                key={company.id}>
                {company.name}
              </OptionItem>
            ))}
          </>
        )}
      </OptionList>
    )
  );
};

export default SearchOptions;
