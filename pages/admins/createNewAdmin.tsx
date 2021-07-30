import { CreateNewAdmin } from "../../components/create/create-new-admin/create-new-admin";
import { useAdminPagesStyles } from "../../hooks/admins-pages-styles";

export default function CRA() {
  const classes = useAdminPagesStyles();
  return (
    <div className={classes.root}>
      <CreateNewAdmin
        adminCreator={async (adminData) => {
          console.log("created", adminData);
        }}
      />
    </div>
  );
}
