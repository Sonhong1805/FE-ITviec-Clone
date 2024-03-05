import { destroy, get, patch, post } from "../utils/request";

export const getJobList = async () => {
  const result = await get("jobs");
  return result;
};

export const getJobDetail = async (id) => {
  const result = await get("jobs/" + id);
  return result;
};

export const getJobsCompany = async (id) => {
  const result = await get("jobs?idCompany=" + id);
  return result;
};

export const updateJob = async (options, id) => {
  const result = await patch(options, id, "jobs");
  return result;
};

export const createCV = async (options, id) => {
  const result = await patch(options, id, "jobs");
  return result;
};

export const destroyJob = async (id) => {
  const result = await destroy(id, "jobs");
  return result;
};

export const createJob = async (options) => {
  const result = await post(options, "jobs");
  return result;
};
