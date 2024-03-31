import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

// API for getting all users details

export const getAllUsersAPI = async ({page}) => {
  try {
    let result = await axios(`${API_URL_BASE}/api/users?page=${page}`, {
      method: "GET",
      //withCredentials: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};
