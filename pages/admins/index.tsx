import Button from "@material-ui/core/Button";
import AdminNav, { AdminNavActivePage } from "../../components/navs/admin-nav";
import classes from "./styles.module.css";
export default function AdminCP() {
  return (
    <div>
      <AdminNav active={AdminNavActivePage.HOME} />
      <main className={classes["main-content"]}>
        <section>
          <h1>Admins Control Panel</h1>
        </section>
        <section>
          <Button>Start Matching</Button>
        </section>
      </main>
    </div>
  );
}
