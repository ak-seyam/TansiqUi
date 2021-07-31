import axios, { AxiosError, AxiosResponse } from "axios";
import { ACCESS_TOKEN_ACC } from "../models/CONSTANTS";
import refreshToken from "./refreshToken";

export const apiInstance = axios.create({
  baseURL: process.env["BASE_URL_BACKEND"],
});

apiInstance.interceptors.request.use(config => {
	if (localStorage.getItem(ACCESS_TOKEN_ACC)) {
		config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN_ACC)}`
	}
	config.withCredentials = true
	return config
})

apiInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    const response = err.response;
    const originalRequest = err.config;
    if (
      response?.status === 401 &&
      response?.data?.message.indexOf("expired") !== -1
    ) {
      await refreshToken(apiInstance)
      return apiInstance(originalRequest);
    } else {
      throw err;
    }
  }
);
