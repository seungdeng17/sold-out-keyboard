import axios from "axios";

export const request = async (url, method = "get", data = {}) => {
  try {
    const response = await axios[method](url, data);
    if (response.data.message) alert(response.data.message);
    return response.data;
  } catch ({ response }) {
    alert(response.data.message);
    return response.data;
  }
};
