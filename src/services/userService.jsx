import { destroy, get, patch, post } from "../utils/request";

export const getUserList = async () => {
  const result = await get(`users`);
  return result;
};

export const updateUser = async (options, id) => {
  const result = await patch(options, id, "users");
  return result;
};

export const login = async (email, password) => {
  const result = await get(`users?email=${email}&password=${password}`);
  return result;
};

export const getUserDetail = async (id) => {
  const result = await get(`users/` + id);
  return result;
};

export const register = async (options) => {
  const result = await post(options, "users");
  return result;
};

export const checkExits = async (key, value) => {
  const result = await get(`users?${key}=${value}`);
  return result;
};

export const updateCV = async (options, id) => {
  const result = await patch(options, id, "users");
  return result;
};

export const changePassword = async (options, id) => {
  const result = await patch(options, id, "users");
  return result;
};
export const deleteAccount = async (id) => {
  const result = await destroy(id, "users");
  return result;
};
