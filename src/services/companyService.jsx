import { get, patch } from "../utils/request";

export const getCompanyList = async () => {
  const result = await get("companies");
  return result;
};

export const getCompanyDetail = async (id) => {
  const result = await get("companies/" + id);
  return result;
};

export const updateCompany = async (options, id) => {
  const result = await patch(options, id, "companies");
  return result;
};

export const login = async (email, password) => {
  const result = await get(`companies?email=${email}&password=${password}`);
  return result;
};

export const setRemember = async (options, id) => {
  const result = await patch(options, id, "companies");
  return result;
};

export const changePassword = async (options, id) => {
  const result = await patch(options, id, "companies");
  return result;
};
