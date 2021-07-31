import { CreateNewStudentDataForm } from "../../components/create/create-new-student/create-new-student-form";
import { CreateSingleNewStudent } from "../../components/create/create-new-student/create-new-student-single";

export default function NewStudent() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        height: "100vh",
      }}
    >
      <main>
        <CreateSingleNewStudent
          studentSubmitter={async (data) => {
            console.log(data);
          }}
        />
      </main>
    </div>
  );
}
