import { useFormik } from "formik";
import AdminData from "../../../models/AdminData";
import * as Yup from "yup";
import { Button, TextField, Typography } from "@material-ui/core";
import { FC } from "react";
import { useFormFieldsStyles } from "../../hooks/form-fields-styles";

export interface CreateNewAdminProps {
  adminCreator: (admin: AdminData) => Promise<any>;
}

const CreateNewAdminForm: FC<CreateNewAdminProps> = ({ adminCreator }) => {
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
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      adminCreator(values);
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
      </form>
    </>
  );
};

export default CreateNewAdminForm;
