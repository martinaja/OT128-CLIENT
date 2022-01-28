import { useFormik } from 'formik';
import * as Yup from 'yup';

import "../FormStyles.css";

const UserForm = (usuario) => {
    

  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: usuario.name,
        email: usuario.email,
        role_id: usuario.role_id,
        description: "",
        photo: "",
      },
      onSubmit: (values) => {
        if (usuario.id) {
          console.log("usuario existe");
          // TODO: hacer peticion put a /users/{id}
        } else {
          console.log("usuario no existe");
          // TODO: hacer peticion post a /users
        }
        console.log(values);
      },
      validationSchema: Yup.object({
        name: Yup.string().min(4, "Debe tener mínimo 4 caracteres").required("Campo obligatorio"),
        email: Yup.string().email("Debe ingresar un email valido").required("Campo obligatorio"),
        role_id: Yup.string().required("Seleccione una opción"),
        description: Yup.string().min(10, "Debe tener mínimo 10 caracteres").required("Campo obligatorio"),
        photo: Yup.mixed().test("format", "Formatos permitidos .jpg .jpeg .png", (value) => {
                if (value !== undefined){
                    return (/(.jpg|.jpeg|.png)$/i.test(value));
                } else return true
          }),
      })
    });

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        onBlur={handleBlur}
        value={values.name || ""}
        onChange={handleChange}
        placeholder="Name"
      ></input>
      {touched.name && errors.name && <span>{errors.name}</span>}
      <input
        className="input-field"
        type="text"
        name="email"
        onBlur={handleBlur}
        value={values.email || ""}
        onChange={handleChange}
        placeholder="Email"
      ></input>
      {touched.email && errors.email && <span>{errors.email}</span>}
      <select
        className="input-field"
        name="role_id"
        onBlur={handleBlur}
        value={values.role_id || ""}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select the role
        </option>
        <option value="1">Admin</option>
        <option value="2">User</option>
      </select>
      {touched.role_id && errors.role_id && <span>{errors.role_id}</span>}
      <label htmlFor="avatar">Choose a profile photo:</label>
      <input
        type="file"
        name="photo"
        onBlur={handleBlur}
        onChange={handleChange}
      />
      {touched.photo && errors.photo && <span>{errors.photo}</span>}
      <input
        className="input-field"
        type="text"
        name="description"
        onBlur={handleBlur}
        value={values.description || ""}
        onChange={handleChange}
        placeholder="Description"
      ></input>
      {touched.description && errors.description && (
        <span>{errors.description}</span>
      )}
      <button className="submit-btn" type="submit">
        Send
      </button>
    </form>
  );
};

export default UserForm;
