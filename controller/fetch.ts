import { apiInstance } from "../services/api-instance";

export async function fetchMajors() {
  return await apiInstance.get("/core/majors").then((res) => res.data);
}

export async function fetchResults() {
	return await apiInstance.get("/core/results").then(res => res.data);
}