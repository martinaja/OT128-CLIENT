// import React, { useEffect, useState } from "react";
// import "../../Components/FormStyles.css";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { ErrorMessage, Formik } from "formik";
// import * as Yup from "yup";
// import { Container, TextField, Box, Button, Input } from "@mui/material";
// import { toBase64 } from "../../utils/toBase64";
// import {
//   getCategory,
//   postCategory,
//   putCategory,
// } from "../../Services/CategoryApiService";
// import Spinner from "../Spinner";

// const CategoriesForm = (props) => {
//   const idCategory = props.match.params.id;
//   const [loader, setLoader] = useState(false);
//   const [category, setCategory] = useState({});
//   const [isEditing, setIsEditing] = useState(false);
//   const [baseImage, setBaseImage] = useState("");
//   const [previewImg, setPreviewImg] = useState(null);
//   const history = useHistory();

//   // if params.id exist set the component to edit
//   useEffect(() => {
//     if (!idCategory) return;
//     (async () => {
//       try {
//         setLoader(true);
//         const fetch = await getCategory(idCategory);
//         const data = fetch?.data;
//         if (data) {
//           setCategory(data);
//           setIsEditing(true);
//         }
//       } catch (e) {
//         console.error(e);
//         history.push("/backoffice/create-category");
//       } finally {
//         setLoader(false);
//       }
//     })();
//   }, [history, idCategory]);

//   useEffect(() => {
//     if (!baseImage) return;
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setPreviewImg(reader.result);
//     };
//     reader.readAsDataURL(baseImage);
//   }, [baseImage]);

//   const SUPPORTED_FORMATS = ["image/jpg", "image/png", "image/jpeg"];

//   const validationSchema = Yup.object().shape({
//     description: Yup.string()
//       .min(1)
//       .max(150, "No se pueden exceder los 150 caracteres")
//       .required("El campo descripción es obligatorio."),

//     name: Yup.string()
//       .required("El campo nombre es obligatorio.")
//       .min(4, "El nombre debe contener almenos 4 caracteres"),

//     image: Yup.mixed()
//       .required("ingrese una imagen.")
//       .test(
//         "fileType",
//         "Formato incorrecto. Sólo se aceptan archivos .jpg, .jpeg, .png",
//         (value) => {
//           if (value) return SUPPORTED_FORMATS.includes(value.type);
//         }
//       ),
//   });

//   //function that format data to be sended to endpoints
//   const sendCategory = async (values) => {
//     const fd = new FormData();
//     fd.append("description", values.description);
//     const base64 = await toBase64(values.image);
//     const newToSend = {
//       ...values,
//       image: base64,
//     };

//     //depending of the state of isEditing call post or put
//     if (!isEditing) {
//       postCategory(newToSend);
//     } else {
//       putCategory(idCategory, newToSend);
//     }
//   };

//   return (
//     <>
//       {loader ? (
//         <Box sx={{ mt: "4rem" }}>
//           <Spinner />
//         </Box>
//       ) : (
//         <Formik
//           enableReinitialize
//           initialValues={{
//             name: category.name || "",
//             description: category.description || "",
//             image: "",
//           }}
//           validationSchema={validationSchema}
//           onSubmit={(values) => {
//             sendCategory(values);
//             setCategory({});
//             setPreviewImg("");
//             history.push("/backoffice/create-category");
//           }}
//         >
//           {({
//             handleSubmit,
//             handleChange,
//             handleBlur,
//             values,
//             errors,
//             setFieldValue,
//             touched,
//           }) => (
//             <Container>
//               <Box sx={{ boxShadow: 5, p: 5, mt: 2 }}>
//                 <h1>{isEditing ? "Editar Categoría" : "Crear Categoría"}</h1>
//                 {previewImg || category.image ? (
//                   <img
//                     style={{ maxWidth: "100%" }}
//                     src={previewImg || category.image}
//                     alt=""
//                   />
//                 ) : null}
//                 <form onSubmit={handleSubmit}>
//                   <TextField
//                     margin="normal"
//                     fullWidth
//                     id="name"
//                     name="name"
//                     label="Título Categoría"
//                     value={values.name}
//                     onChange={handleChange}
//                     error={touched.name && Boolean(errors.name)}
//                     helperText={touched.name && errors.name}
//                     onBlur={handleBlur}
//                   />
//                   <CKEditor
//                     name="description"
//                     editor={ClassicEditor}
//                     data={values.description}
//                     onChange={(event, editor) => {
//                       const data = editor.getData();
//                       setFieldValue("description", data);
//                     }}
//                   />
//                   <ErrorMessage component="small" name="description" />
//                   <label htmlFor="image">
//                     <Input
//                       name="image"
//                       accept="image/*"
//                       id="image"
//                       multiple
//                       type="file"
//                       onChange={(e) => {
//                         const file = e.currentTarget.files[0];
//                         setFieldValue("image", file);
//                         setBaseImage(file);
//                       }}
//                       style={{ display: "none" }}
//                     />
//                     <Button fullWidth variant="outlined" component="span">
//                       {!previewImg ? "Subir imagen" : "Subir otra imagen"}
//                     </Button>
//                     <ErrorMessage component="small" name="image" />
//                   </label>
//                   <br />
//                   <Button type="submit" variant="contained" fullWidth>
//                     {isEditing ? "Editar Categoría" : "Crear Categoría"}
//                   </Button>
//                 </form>
//               </Box>
//             </Container>
//           )}
//         </Formik>
//       )}
//     </>
//   );
// };

// export default CategoriesForm;




// TODO: REFACTOR