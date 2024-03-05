import { useSearchParams } from "react-router-dom";

import CompanySpotlight from "./CompanySpotLight";
import SearchResult from "./SearchResult";
import { JobsContainer, SearchBg, SearchContainer } from "./styled";
import SearchForm from "../../components/SearchForm";

const Search = () => {
  const [param] = useSearchParams();

  return (
    <>
      <SearchBg>
        <SearchContainer>
          <SearchForm
            valueCity={param.get("city")}
            valueKeyword={param.get("keywords")}
          />
        </SearchContainer>
      </SearchBg>
      <JobsContainer>
        <CompanySpotlight />
        <SearchResult />
      </JobsContainer>
    </>
  );
};

export default Search;
