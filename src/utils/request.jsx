const API_DOMAIN = "https://database-itjobs.onrender.com/";

export const get = async (path) => {
  const response = await fetch(API_DOMAIN + path);
  const data = await response.json();
  return data;
};

export const post = async (options, path) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const data = await response.json();
  return data;
};

export const destroy = async (id, path) => {
  const response = await fetch(API_DOMAIN + path + "/" + id, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const patch = async (options, id, path) => {
  const response = await fetch(API_DOMAIN + path + "/" + id, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  const result = await response.json();
  return result;
};

export const put = async (options, id, path) => {
  const response = await fetch(API_DOMAIN + path + "/" + id, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  const result = await response.json();
  return result;
};
