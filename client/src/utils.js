import axios from "axios";

export const request = async (callback, url, method = "get", data = {}) => {
  try {
    const response = await axios[method](url, data);
    if (response.data.message) callback(response.data.message);
    return response.data;
  } catch ({ response }) {
    callback(response.data.message);
    return response.data;
  }
};
