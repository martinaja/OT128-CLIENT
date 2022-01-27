import React from "react";
import "../FormStyles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form, Field, ErrorMessage, useFormik, FormikProvider } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategory,
  postCategoy,
  editCategory,
} from "../../app/slices/category";
import * as Yup from "yup";

const CategoriesForm = () => {
  const initialValues = {
    name: "",
    description: "",
    image: "",
  };

  const SUPPORTED_FORMATS = ["image/jpg", "image/png"];

  const validationSchema = Yup.object().shape({
    description: Yup.string()
      .min(1)
      .max(150, "No se pueden exceder los 150 caracteres")
      .required("El campo descripción es obligatorio."),

    name: Yup.string()
      .required("El campo nombre es obligatorio.")
      .min(4, "El nombre debe contener almenos 4 caracteres"),

    image: Yup.mixed()
      .required("ingrese una imagen.")
      .test(
        "fileType",
        "Formato incorrecto. Sólo se aceptan archivos .jpg, .jpeg, .png",
        (value) => {
          if (value) return SUPPORTED_FORMATS.includes(value.type);
        }
      ),
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
          name="name"
          placeholder="Ingrese nombre de categoría"
        />
        <ErrorMessage
          className="field-error text-danger"
          name="name"
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

        <input
          className="input-field"
          name="image"
          type="file"
          onChange={(e) => {
            formik.setFieldValue("image", e.currentTarget.files[0]);
          }}
        />
        <ErrorMessage
          className="field-error text-danger"
          name="image"
          component="div"
        />

        <button type="submit">Agregar categoría</button>
      </Form>
    </FormikProvider>
  );
};

export default CategoriesForm;
