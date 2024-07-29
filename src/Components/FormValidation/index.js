import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import style from "./style.css";

const FormValidation = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Must be 4 characters or more")
        .required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <div className="container">
        <h1 className="typography">Form Validation</h1>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>

        <div>
          <label htmlFor="email">Email Address: </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormValidation;
