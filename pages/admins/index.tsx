import Button from "@material-ui/core/Button";
import AdminPages from "../../components/layouts/admin-pages";
import { createTansiq } from "../../controller/create";
import AdminNav, { AdminNavActivePage } from "../../components/navs/admin-nav";

export default function AdminCP() {
  const tansiqStarter = async () => {
    const [err, data] = await createTansiq();
  };
  return (
    <AdminPages active={AdminNavActivePage.HOME}>
      <div style={{ padding: "25px" }}>
        <h1 style={{ marginBottom: "16px" }}>Admins Control panel</h1>
        <h3 style={{ marginBottom: "8px" }}>What you can do from here? 🤔</h3>
        <ul style={{ marginLeft: "2rem" }}>
          <li>Create new admins</li>
          <li>Create new student or students from an excel file</li>
          <li>Add majors</li>
          <li>Click the following button to start matching</li>
        </ul>
        <Button onClick={tansiqStarter} style={{ marginTop: "16px" }} variant="contained">
          Start matching
        </Button>
      </div>
    </AdminPages>
  );
}
