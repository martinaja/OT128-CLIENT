import React, { useEffect, useState } from "react";
import "../../Components/FormStyles.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { Container, TextField, Box, Button, Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getCategory,
//   postCategoy,
//   editCategory,
// } from "../../app/slices/category";
import { toBase64 } from "../../utils/base64";
import { getCategory } from "../../Services/CategoryApiService";

const CategoriesForm = (props) => {
  const idCategory = props.match.params.id;
  const [loader, setLoader] = useState(false);
  const [category, setCategory] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [baseImage, setBaseImage] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const history = useHistory();

  const dispatch = useDispatch();
  const state = useSelector((state) => state.category);

  // if params.id exist set the component to edit
  useEffect(() => {
    if (!idCategory) return;
    (async () => {
      try {
        setLoader(true);
        const fetch = await getCategory(idCategory);
        const data = fetch?.data;
        if (data) {
          setCategory(data);
          setIsEditing(true);
        }
      } catch (e) {
        console.error(e);
        history.push("/backoffice/create-category");
        setIsEditing(false);
      } finally {
        setLoader(false);
      }
    })();
  }, [history, idCategory]);

  useEffect(() => {
    if (!baseImage) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(baseImage);
  }, [baseImage]);

  const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"];

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

  //function that format data to be sended to endpoints
  const sendCategory = async (values) => {
    const fd = new FormData();
    fd.append("description", values.description);
    const base64 = await toBase64(values.image);
    const newToSend = {
      ...values,
      image: base64,
    };
    // if (!isEditing) {
    //   dispatch(postCategoy(newToSend));
    // } else {
    //   dispatch(editCategory(idCategory, newToSend));
    // }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: state.category.name || "",
        description: state.category.description || "",
        image: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        sendCategory(values);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        setFieldValue,
        touched,
      }) => (
        <Container>
          <Box sx={{ boxShadow: 5, p: 5 }}>
            {previewImg || state.category.image ? (
              <img
                style={{ maxWidth: "100%" }}
                src={previewImg || state.category.image}
                alt=""
              />
            ) : null}
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                name="name"
                label="Título"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                onBlur={handleBlur}
              />
              <CKEditor
                name="description"
                editor={ClassicEditor}
                data={values.description}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFieldValue("description", data);
                }}
              />
              <ErrorMessage component="small" name="description" />
              <label htmlFor="image">
                <Input
                  name="image"
                  accept="image/*"
                  id="image"
                  multiple
                  type="file"
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    setFieldValue("image", file);
                    setBaseImage(file);
                  }}
                  style={{ display: "none" }}
                />
                <Button fullWidth variant="outlined" component="span">
                  {!previewImg ? "Subir imagen" : "Subir otra imagen"}
                </Button>
                <ErrorMessage component="small" name="image" />
              </label>
              <br />
              <Button type="submit" variant="contained" fullWidth>
                {isEditing ? "Editar Categoría" : "Crear Categoría"}
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default CategoriesForm;
