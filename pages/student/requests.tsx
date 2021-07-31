import { GetServerSideProps } from "next";
import CreateRequest from "../../components/requests/create-request";
import MajorData from "../../models/MajorData";

export default function Requests() {
  return (
    <CreateRequest
      studentId="somehow get the id"
      majorsFetcher={async () => {
        return Promise.resolve<MajorData[]>([
          {
            name: "major 1",
            limit: 24,
            id: "asdas-asdasd-asdas",
          },
          {
            name: "major 2",
            limit: 23,
            id: "asd",
          },
        ]);
      }}
      requestCreate={async (studentId, majorRanks) => {
        console.log("student", studentId, "mr", majorRanks);
      }}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};
