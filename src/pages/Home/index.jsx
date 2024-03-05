import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm";
import TagList from "../../components/TagList";
import Blogs from "./Blogs";
import Employers from "./Employers";
import {
  BackgroundSearch,
  BackgroundBlog,
  ContainerSearch,
  MainContainer,
  Heading,
  MainWrapper,
} from "./styled";
import { getJobList } from "../../services/jobService";
import { useTranslation } from "react-i18next";
import { getCookie } from "../../helpers/cookie";

const Home = () => {
  const [quantity, setQuantity] = useState(0);
  const { i18n } = useTranslation();
  const language = i18n.language;

  const username = getCookie("username");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getJobList();
      setQuantity(response.length);
    };
    fetchData();
  }, []);

  return (
    <>
      <BackgroundSearch>
        <ContainerSearch>
          <Heading>
            {language === "en" ? (
              username ? (
                <>
                  {quantity} IT Jobs &quot;Chất&quot; {username}
                </>
              ) : (
                <>{quantity} IT Jobs For &quot;Chất&quot; Developers</>
              )
            ) : username ? (
              <>
                {quantity} Việc Làm IT &quot;Chất&quot; Dành Cho {username}
              </>
            ) : (
              <>{quantity} Việc làm IT cho Developer &quot;Chất&quot;</>
            )}
          </Heading>
          <SearchForm />
          <TagList />
        </ContainerSearch>
      </BackgroundSearch>
      <MainWrapper>
        <MainContainer>
          <Employers />
        </MainContainer>
      </MainWrapper>
      <BackgroundBlog>
        <MainContainer>
          <Blogs />
        </MainContainer>
      </BackgroundBlog>
    </>
  );
};

export default Home;
