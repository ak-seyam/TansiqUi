import Button from "@material-ui/core/Button";
import AdminPages from "../../components/layouts/admin-pages";
import { createTansiq } from "../../controller/create";
import AdminNav, { AdminNavActivePage } from "../../components/navs/admin-nav";
import { useState } from "react";

export default function AdminCP() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const tansiqStarter = async () => {
    setError("");
    setSuccess(false);
    const [err, data] = await createTansiq();
    if (err) setError(err);
    setSuccess(data != null);
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
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
        <Button
          onClick={tansiqStarter}
          style={{ marginTop: "16px" }}
          variant="contained"
        >
          Start matching
        </Button>{" "}
        <br />
        {error}
        <br />
        {success ? "Success" : ""}
      </div>
    </AdminPages>
  );
}
