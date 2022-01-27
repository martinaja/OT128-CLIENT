import React from "react";
import "../FormStyles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Field, ErrorMessage, useFormik, FormikProvider } from "formik";
import * as Yup from "yup";

const CategoriesForm = () => {
  const initialValues = {
    nameArticle: "",
    description: "",
    // image: "",
  };

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(1)
      .max(150, "No se pueden exceder los 150 caracteres")
      .required("El campo descripción es obligatorio."),
    nameArticle: Yup.string()
      .required("El campo nombre es obligatorio.")
      .min(4, "El nombre debe contener almenos 4 caracteres"),
  });

  const inputHandler = (event, editor) => {
    formik.setFieldValue("description", editor.getData());
  };

  const onSubmit = (values) => {
    const fd = new FormData();
    fd.append("description", values.description);
    console.log(values);
  };

  const formik = useFormik({ initialValues, onSubmit, validationSchema });

  return (
    <FormikProvider value={formik}>
      <Form className="form-container">
        <Field
          className="input-field"
          type="text"
          name="nameArticle"
          placeholder="Ingrese nombre de categoría"
        />
        <ErrorMessage
          className="field-error text-danger"
          name="nameArticle"
          component="div"
        />

        <CKEditor
          id="inputText"
          className="inputText"
          editor={ClassicEditor}
          name="description"
          onChange={inputHandler}
        />
        <ErrorMessage
          className="field-error text-danger"
          name="description"
          component="div"
        />

        <button type="submit">Agregar categoría</button>
      </Form>
    </FormikProvider>
  );
};

export default CategoriesForm;
