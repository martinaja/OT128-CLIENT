import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import Spinner from "../Spinner";
import {
  alertServiceConfirm,
  alertServiceInfoTimer,
  alertServiceError,
} from "../AlertService";

const LoginForm = () => {
  const validateFields = (values) => {
    // Checks user input is valid
    const errors = {};

    if (!values.email) {
      errors.email = "* Campo obligatorio";
    }
    if (!values.password) {
      errors.password = "* Campo obligatorio";

    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "* Campo obligatorio";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "* Direccion de email incorrecta";
    }
    if (values.password !== values.confirmPassword)
      errors.confirmPassword = "* Las contraseñas deben coincidir";
    if (values.password.length < 6) {
      errors.password = "* La longitud minima es 6";
    }
    if (
      !/^(?=.*\d)(?=.*[a-zA-Záéíóúüñ])(?=.*[$-/:-?{-~!"^_`\]])/.test(
        values.password
      )
    ) {
      errors.password = "* La contraseña no cumple los parametros solicitados";
    }

    return errors;
  };
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values, loading) => {
    const userInfo = {
      user: values.email,
      password: values.password,
    };
  };

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validate={validateFields}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ isSubmitting }) => (
        <Form className="form-container">
          <Field
            type="email"
            name="email"
            className="input-field"
            placeholder="Ingrese email"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            name="password"
            className="input-field"
            placeholder="Ingrese contraseña"
          />
          <ErrorMessage name="password" component="div" />
          <button
            type="submit-btn"
            className="submit-btn"
            disabled={isSubmitting}
          >
            Registrarse
          </button>
          <button onClick={() => setLoading(true)}>Spinner</button>
          {loading && <Spinner />}
          <button
            type="button"
            onClick={() =>
              alertServiceInfoTimer(
                "top-end",
                "Sucess",
                "HTML example text",
                false,
                2000
              )
            }
          >
            AlertInfo
          </button>
          <button
            type="button"
            onClick={() =>
              alertServiceConfirm(
                "top-end",
                "Confirm",
                "HTML example text",
                false,
                2000
              )
            }
          >
            AlertConfirm
          </button>
          <button
            type="button"
            onClick={() =>
              alertServiceError(
                "top-end",
                "Error",
                "HTML example text",
                false,
                2000
              )
            }
          >
            AlertError
          </button>
        </Form>
      )}
    </Formik>
  );
};


export default LoginForm;
