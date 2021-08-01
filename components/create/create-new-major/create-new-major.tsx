import { useFormik } from "formik";
import { FC, useState } from "react";
import MajorData from "../../../models/MajorData";
import * as Yup from "yup";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import { TextInputField } from "../create-new-student/create-new-student-form";
import { useFormFieldsStyles } from "../../hooks/form-fields-styles";

interface CreateNewMajorProps {
  majorsCreator: (data: MajorData) => Promise<any>;
}

const CreateNewMajor: FC<CreateNewMajorProps> = ({ majorsCreator }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
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
      const [error, data] = await majorsCreator(values);
      if (error) setError(error);
      setSuccess(data !== undefined);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    },
  });
  return (
    <Card
      style={{
        width: "400px",
      }}
    >
      <Typography align="center" style={{ marginTop: "24px" }}>
        Create new major
      </Typography>
      <CardContent>
        <form onSubmit={formik.handleSubmit} className={classes.root}>
          <TextInputField fieldName="name" formik={formik} />
          <TextInputField type="number" fieldName="limit" formik={formik} />
          <Button variant="contained" type="submit">Submit</Button>
        </form>
        {error}
        {success ? "Success!" : ""}
      </CardContent>
    </Card>
  );
};

export default CreateNewMajor;
