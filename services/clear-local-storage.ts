import { AxiosError } from "axios";
import {
  ACCESS_TOKEN_ACC,
  USER_ID_LOCAL_STORAGE_NAME,
  USER_ROlE_LOCAL_STORAGE_NAME,
} from "../models/CONSTANTS";
import { apiInstance } from "./api-instance";

export async function logout() {
  localStorage.removeItem(USER_ID_LOCAL_STORAGE_NAME);
  localStorage.removeItem(USER_ROlE_LOCAL_STORAGE_NAME);
  localStorage.removeItem(ACCESS_TOKEN_ACC);
  await apiInstance.post("/logout").catch((err: AxiosError) => {
    if (err.response?.status !== 404) {
      throw err;
    }
  });
}
