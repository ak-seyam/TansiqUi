import { GetServerSideProps } from "next";
import CreateRequest from "../../components/requests/create-request";
import { createRequest } from "../../controller/create";
import { fetchMajors } from "../../controller/fetch";
import MajorData from "../../models/MajorData";
import { useEffect, useState } from "react";
import { USER_ID_LOCAL_STORAGE_NAME } from "../../models/CONSTANTS";

export default function Requests() {
  const [studentId, setStudentId] = useState("");
  useEffect(() => {
    const id = localStorage.getItem(USER_ID_LOCAL_STORAGE_NAME);
    if (id != null) {
      setStudentId(id);
    }
  }, []);
  return (
    <>
      {studentId ? (
        <CreateRequest
          studentId={studentId}
          majorsFetcher={fetchMajors}
          requestCreate={createRequest}
        />
      ) : (
        "loading"
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};
