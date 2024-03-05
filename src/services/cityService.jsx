import { get } from "../utils/request";

export const getCityList = async () => {
  const result = await get("cities");
  return result;
};
