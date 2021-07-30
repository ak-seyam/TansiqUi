import { Card, CardContent } from "@material-ui/core";
import { FC } from "react";
import {
  CreateNewStudentDataForm,
  CreateNewStudentDataFormProps,
} from "./create-new-student-form";

export const CreateSingleNewStudent: FC<CreateNewStudentDataFormProps> = (
  props
) => {
  return (
    <Card
      style={{ width: "400px", justifyContent: "center", alignItems: "center" }}
    >
      <CardContent>
        <CreateNewStudentDataForm {...props} />
      </CardContent>
    </Card>
  );
};
