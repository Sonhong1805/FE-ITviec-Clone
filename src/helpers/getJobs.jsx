export const getJobs = (jobs, page, limit) => {
  let array = [];
  for (let i = (page - 1) * limit; i < page * limit; i++) {
    array.push(jobs[i]);
  }
  return array;
};

export const getLength = (jobs) => {
  return jobs.length;
};
