import { get } from "../utils/request";

export const getTagList = async () => {
  const result = await get("tags");
  return result;
};
