import axios, { AxiosError, AxiosResponse } from "axios";
import { apiInstance } from "../services/api-instance";
import jwt_decode from "jwt-decode";
import { ACCESS_TOKEN_ACC, USER_ID_LOCAL_STORAGE_NAME, USER_ROlE_LOCAL_STORAGE_NAME } from "../models/CONSTANTS";

export default async function login(email: string, password: string) {
  console.log("logging in with email", email, "and password", password);

  // first create a form data
  // don't forget to pass with credentials
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return apiInstance
    .post("/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res: AxiosResponse) => res.data)
    .then((data) => {
      localStorage.setItem(ACCESS_TOKEN_ACC, data[ACCESS_TOKEN_ACC]);
      // get the data and update local storage values
      const decoded: any = jwt_decode(data[ACCESS_TOKEN_ACC]);
	  console.log(decoded)
      localStorage.setItem(USER_ROlE_LOCAL_STORAGE_NAME, decoded["role"]);
      localStorage.setItem(USER_ID_LOCAL_STORAGE_NAME, decoded["iss"]);
      return [null, decoded];
    })
    .catch((err: AxiosError) => {
      if (err.response?.status === 401) {
        return ["Invalid email or password", null];
      } else if (err.response?.status === 500) {
        return ["Server error! please try again later", null];
      } else throw err;
    });
}
