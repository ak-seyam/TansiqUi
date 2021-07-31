import { AxiosInstance } from "axios";
import { ACCESS_TOKEN_ACC } from "../models/CONSTANTS";

export default async function refreshToken(apiInstance : AxiosInstance) {
	const data = await apiInstance.get("/refreshToken").then(res => res.data)
	localStorage.setItem(ACCESS_TOKEN_ACC, data[ACCESS_TOKEN_ACC]);
}