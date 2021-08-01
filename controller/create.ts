import { AxiosError } from "axios";
import AdminData from "../models/AdminData";
import MajorData from "../models/MajorData";
import MajorsRanks from "../models/MajorsRanks";
import StudentData from "../models/StudentData";
import { apiInstance } from "../services/api-instance";

async function createResource(path: string, data: any): Promise<any[]> {
  return apiInstance
    .post(path, data)
    .then((res) => res.data)
    .then((data) => [null, data])
    .catch((err: AxiosError) => {
      if (err.response?.status === 400) {
        return [err.response?.data.message, null];
      } else throw err;
    });
}

/**
 *
 * @param data major data
 * @returns [error message, result data]
 */
export async function createMajor(data: MajorData): Promise<any[]> {
  return createResource("/core/admins/majors", data);
}

export async function createStudent(data: StudentData): Promise<any[]> {
  return createResource("/core/admins/students", data);
}

export async function createAdmin(data: AdminData): Promise<any> {
  return createResource("/core/admins", data);
}

export async function createRequest(studentId: string, ranks: MajorsRanks[]) {
  return createResource("/core/students/requests", {
    studentId,
    majors: ranks,
  });
}

export async function createTansiq() {
  return createResource("/core/admins/tansiq", {});
}
