import CreateNewMajor from "../../components/create/create-new-major/create-new-major";
import AdminPages from "../../components/layouts/admin-pages";
import { AdminNavActivePage } from "../../components/navs/admin-nav";
import { createMajor } from "../../controller/create";

export default function createNewMajor() {
  return (
    <AdminPages active={AdminNavActivePage.CREATE_MAJOR}>
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
          <CreateNewMajor
            majorsCreator={createMajor}
          />
        </main>
      </div>
    </AdminPages>
  );
}
