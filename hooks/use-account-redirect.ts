import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { USER_ROlE_LOCAL_STORAGE_NAME } from "../models/CONSTANTS";
export default function useAccountRedirect() {
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem(USER_ROlE_LOCAL_STORAGE_NAME)) {
      if (localStorage.getItem(USER_ROlE_LOCAL_STORAGE_NAME) === "ROLE_ADMIN") {
        router.push("/admins");
      } else if (
        localStorage.getItem(USER_ROlE_LOCAL_STORAGE_NAME) === "ROLE_STUDENT"
      ) {
        router.push("/students");
      }
    }
  }, []);
}
