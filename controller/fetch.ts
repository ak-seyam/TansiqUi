import { apiInstance } from "../services/api-instance";

export async function fetchMajors() {
  return await apiInstance.get("/core/majors").then((res) => res.data);
}
