import { FC } from "react";
import AdminNav, { AdminNavActivePage } from "../navs/admin-nav";
import classes from "./styles.module.css";

interface AdminPagesProps {
  active: AdminNavActivePage;
}

const AdminPages: FC<AdminPagesProps> = ({ children, active }) => {
  return (
    <>
      <AdminNav active={active} />
      <main className={classes["main-content"]}>{children}</main>
    </>
  );
};
export default AdminPages;
