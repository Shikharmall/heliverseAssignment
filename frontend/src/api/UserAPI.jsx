import axios from "axios";
import { API_URL_BASE } from "../utils/apiURL";

// API for getting all users details with pagination and filter

export const getAllUsersAPI = async (page, domain, gender, available) => {
  try {
    let result = await axios(
      `${API_URL_BASE}/api/users?page=${page}&domain=${domain}&gender=${gender}&available=${available}`,
      {
        method: "GET",
        //withCredentials: true,
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};


// API for getting all users details

export const getAllUsersDetailsAPI = async () => {
  try {
    let result = await axios(`${API_URL_BASE}/api/usersAll`, {
      method: "GET",
      //withCredentials: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};
