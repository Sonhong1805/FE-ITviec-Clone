import { Link } from "react-router-dom";
import { SuggestList, SuggestTags, Wrapper } from "./styled";
import { useEffect, useState } from "react";
import { getTagList } from "../../services/tagService";
import { useTranslation } from "react-i18next";

const TagList = () => {
  const { t } = useTranslation(["home"]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    const fetchApiCity = async () => {
      const response = await getTagList();
      if (response) {
        setTags([...response]);
      }
    };

    fetchApiCity();
  }, []);

  return (
    <Wrapper>
      <SuggestTags>{t("Suggestions")}</SuggestTags>
      <SuggestList>
        {tags.slice(0, 8).map((tag) => (
          <li key={tag.key}>
            <Link to={`/search?keywords=${tag.value}`}>{tag.value}</Link>
          </li>
        ))}
      </SuggestList>
    </Wrapper>
  );
};

export default TagList;
