import { useFormik } from "formik";
import { FC } from "react";
import MajorData from "../../../models/MajorData";
import * as Yup from "yup";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { TextInputField } from "../create-new-student/create-new-student-form";
import { useFormFieldsStyles } from "../../hooks/form-fields-styles";

interface CreateNewMajorProps {
  majorsCreator: (data: MajorData) => Promise<any>;
}

const CreateNewMajor: FC<CreateNewMajorProps> = ({ majorsCreator }) => {
  const classes = useFormFieldsStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      limit: 1,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("required")
        .min(3, "name must be larger that 3 characters"),
      limit: Yup.number()
        .required("required")
        .min(1, "major should have at least more student"),
    }),
    onSubmit: async (values) => {
      await majorsCreator(values);
    },
  });
  return (
    <Card
      style={{
        width: "400px",
      }}
    >
      <Typography align="center">Create new major</Typography>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className={classes.root}>
          <TextInputField fieldName="name" formik={formik} />
          <TextInputField fieldName="limit" formik={formik} />
          <Button type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateNewMajor;
