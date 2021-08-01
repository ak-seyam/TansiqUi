import CreateBulkStudents from "../../components/create/create-new-student/create-multiple-students";
import { CreateNewStudentDataForm } from "../../components/create/create-new-student/create-new-student-form";
import { CreateSingleNewStudent } from "../../components/create/create-new-student/create-new-student-single";
import AdminPages from "../../components/layouts/admin-pages";
import { AdminNavActivePage } from "../../components/navs/admin-nav";
import { createStudent } from "../../controller/create";

export default function NewStudent() {
  return (
    <AdminPages active={AdminNavActivePage.ADD_STUDENTS}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eee",
        }}
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3 style={{margin: "24px"}}>Create a single student</h3>
          <CreateSingleNewStudent studentSubmitter={createStudent} />
          <h3 style={{margin: "24px 24px 0px 24px"}}>Or upload a CSV Bulk 🚀</h3>
          <CreateBulkStudents />
        </main>
      </div>
    </AdminPages>
  );
}
