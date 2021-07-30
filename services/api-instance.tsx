import axios, { AxiosError, AxiosResponse } from "axios";

const apiInstance = axios.create({
  baseURL: process.env["BASE_URL_BACKEND"],
});

apiInstance.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError) => {
    const response = err.response;
    const originalRequest = err.config;
    if (
      response?.status === 401 &&
      response?.data?.message === "Invalid or expired Token"
    ) {
      // await refreshToken()
      return apiInstance(originalRequest);
    } else {
      throw err;
    }
  }
);
