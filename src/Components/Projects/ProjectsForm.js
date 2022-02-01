import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import "../FormStyles.css";

const ProjectForm = (proyect) => {
  return (
    <>
      <Formik
        initialValues={{
          title: proyect.title || "",
          description: proyect.description || "",
          image: proyect.image || "",
          due_date: proyect.due_date || "",
        }}
        onSubmit={(values) => {
          if (proyect.id) {
            console.log("usuario existe");
            // TODO: hacer peticion put a /projects/{id}
          } else {
            console.log("usuario no existe");
            // TODO: hacer peticion post a /projects
          }
          console.log(values);
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Campo obligatorio"),
          due_date: Yup.mixed()
            .required("Campo obligatorio")
            .test(
              "date",
              "Debe ingresar una fecha válida ej. 31/12/2021",
              (value) => {
                const date_regex =
                  /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
                if (date_regex.test(value)) {
                  return true;
                }
              }
            ),
          description: Yup.string().required("Campo obligatorio"),
          image: Yup.mixed()
            .required("Campo obligatorio")
            .test("format", "Formatos permitidos .jpg .jpeg .png", (value) => {
              if (value !== undefined) {
                return /(.jpg|.jpeg|.png)$/i.test(value);
              } else return true;
            }),
        })}
      >
        {(formik) => (
          <Form className="form-container">
            <Field
              name="title"
              type="text"
              placeholder="title"
              className="input-field"
            />
            <ErrorMessage name="title" component="span" />
            <Field
              name="due_date"
              type="text"
              placeholder="due_date"
              className="input-field"
            />
            <ErrorMessage name="due_date" component="span" />
            <label htmlFor="avatar" className="strong">
              Subir imagen:
            </label>
            <Field name="image" type="file" className="input-field" />
            <ErrorMessage name="image" component="span" />
            <Field
              name="description"
              type="text"
              placeholder="description"
              className="input-field"
            />
            <ErrorMessage name="description" component="span" />
            <button className="submit-btn" type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ProjectForm;
