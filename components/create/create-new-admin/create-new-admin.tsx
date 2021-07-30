import { Card, CardContent } from "@material-ui/core";
import { FC } from "react";
import CreateNewAdminForm, {
  CreateNewAdminProps,
} from "./create-new-admin-form";
import { useCRAStyles } from "./create-new-admins-styles";

export const CreateNewAdmin: FC<CreateNewAdminProps> = (props) => {
  const classes = useCRAStyles();
  return (
    <main>
      <Card className={classes.root}>
        <CardContent>
          <CreateNewAdminForm {...props} />
        </CardContent>
      </Card>
    </main>
  );
};
