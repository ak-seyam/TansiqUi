import { useFormik } from "formik";
import AdminData from "../../../models/AdminData";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import { FC, useState } from "react";
import { useFormFieldsStyles } from "../../hooks/form-fields-styles";

export interface CreateNewAdminProps {
  adminCreator: (admin: AdminData) => Promise<any>;
}

const CreateNewAdminForm: FC<CreateNewAdminProps> = ({ adminCreator }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const classes = useFormFieldsStyles();
  // create form data hook probably
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("must be a valid email").required("Required"),
      password: Yup.string()
        .min(8, "password must be greater than 8 numbers")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setError("");
	  setSuccess(false);
      const [err, data] = await adminCreator(values);
      if (err) setError(err);
      setSuccess(data != null);
      setInterval(() => {
        setSuccess(false);
      }, 4000);
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.root}>
        <Typography align="center">Create a new admin</Typography>
        <TextField
          fullWidth
          label="email"
          error={formik.touched.email && formik.errors.email !== undefined}
          helperText={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps("email")}
        />
        <TextField
          fullWidth
          label="password"
          error={
            formik.touched.password && formik.errors.password !== undefined
          }
          helperText={formik.touched.password && formik.errors.password}
          type="password"
          {...formik.getFieldProps("password")}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
        {error}
        {success ? "Success!" : ""}
      </form>
    </>
  );
};

export default CreateNewAdminForm;
