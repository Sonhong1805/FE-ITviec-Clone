import { useEffect, useState } from "react";
import { OptionItem, OptionList } from "./styled";
import { getCityList } from "../../services/cityService";
import { useTranslation } from "react-i18next";

const CityOptions = ({ onHandleOptionValue }) => {
  const { t } = useTranslation(["home"]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetchApiCity = async () => {
      const response = await getCityList();
      if (response) {
        setCities([
          {
            key: 0,
            value: t("All Cities"),
          },
          ...response,
        ]);
      }
    };

    fetchApiCity();
  }, [t]);
  const getOptionValue = (e) => {
    onHandleOptionValue(e.target.innerHTML);
  };

  return (
    <OptionList>
      {cities.map((city) => (
        <OptionItem key={city.key} onClick={getOptionValue}>
          {city.value}
        </OptionItem>
      ))}
    </OptionList>
  );
};

export default CityOptions;
