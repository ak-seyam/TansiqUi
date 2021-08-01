import { apiInstance } from "../services/api-instance";

export async function deleteResults() {
  return await apiInstance.delete("/core/results").then((res) => res.data);
}

