import { CreateNewAdmin } from "../../components/create/create-new-admin/create-new-admin";
import AdminPages from "../../components/layouts/admin-pages";
import { AdminNavActivePage } from "../../components/navs/admin-nav";
import { createAdmin } from "../../controller/create";
import { useAdminPagesStyles } from "../../hooks/admins-pages-styles";

export default function CRA() {
  const classes = useAdminPagesStyles();
  return (
    <AdminPages active={AdminNavActivePage.ADD_ADMIN}>
      <div className={classes.root}>
        <CreateNewAdmin
          adminCreator={createAdmin}
        />
      </div>
    </AdminPages>
  );
}
