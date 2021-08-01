import { Button, TextField, Typography } from "@material-ui/core";
import { FieldInputProps, useFormik } from "formik";
import { FC, useState } from "react";
import StudentData from "../../../models/StudentData";
import * as Yup from "yup";
import { useFormFieldsStyles } from "../../hooks/form-fields-styles";

export interface CreateNewStudentDataFormProps {
  studentSubmitter: (student: StudentData) => Promise<any>;
}

interface TextInputFieldProps {
  fieldName: string;
  label?: string;
  formik: any;
  type?: string;
}

export const TextInputField: FC<TextInputFieldProps> = ({
  fieldName,
  label,
  formik,
  type = "text",
}) => {
  return (
    <TextField
      type={type}
      error={formik.touched[fieldName] && formik.errors[fieldName] != undefined}
      helperText={formik.touched[fieldName] && formik.errors[fieldName]}
      {...formik.getFieldProps(fieldName)}
      label={label ? label : fieldName}
      fullWidth
    />
  );
};

export const CreateNewStudentDataForm: FC<CreateNewStudentDataFormProps> = ({
  studentSubmitter,
}) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const classes = useFormFieldsStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordRepeated: "",
      mark: 0,
      name: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("must be a valid email").required("required"),
      password: Yup.string()
        .min(8, "must be larger than 8 characters")
        .required("required"),
      passwordRepeated: Yup.string().oneOf(
        [Yup.ref("password")],
        "passwords are not identical"
      ),
      mark: Yup.number().min(0, "must be 0 or higher").required("required"),
      name: Yup.string()
        .test("full-name", "more than 2 names", (name) => {
          return name
            ? name.trim().replace(/\s\s+/g, " ").split(" ").length > 2
            : true;
        })
        .required("required"),
    }),
    onSubmit: async (values) => {
      setSuccess(false);
      //   alert(JSON.stringify(values, null, 2));
      setError("");
      const [err, data] = await studentSubmitter(values);
      if (err) setError(err);
      setSuccess(data != undefined);
      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.root}>
      <Typography align="center">Create a single student</Typography>
      <TextInputField fieldName="name" formik={formik} />
      <TextInputField fieldName="email" formik={formik} />
      <TextInputField fieldName="password" formik={formik} type="password" />
      <TextInputField
        fieldName="passwordRepeated"
        formik={formik}
        type="password"
      />
      <TextInputField type="number" fieldName="mark" formik={formik} />
      <Button variant="contained" type="submit">
        Submit
      </Button>
      {error}
      {success ? "Success" : ""}
    </form>
  );
};
