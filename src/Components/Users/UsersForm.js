import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import {
  postPrivateHandler,
  putPrivateHandler,
} from '../../Services/BaseHTTP/privateApiService'

import '../FormStyles.css'
import { useParams, useHistory } from 'react-router-dom'
import { getUsers } from '../../Services/apiServices/usersApiService'
import { useEffect, useState } from 'react'
import { alertServiceError } from '../AlertService'

const UserForm = () => {
  const { id } = useParams()
  const history = useHistory()
  const url = process.env.REACT_APP_API_USERS_GET

  const [usuario, setUsuario] = useState({})

  useEffect(() => {
    if (!id) return
    ;(async () => {
      const response = await getUsers(id)
      if (response.error) {
        alertServiceError(
          response.message,
          'No se pudo obtener la información solicitada',
        )
        history.push('/backoffice/users/create')
      }

      const dataCategory = response.data?.data

      if (dataCategory) {
        setUsuario(dataCategory)
      } else {
        alertServiceError('No se pudo cargar la categoría', 'ID inválido')
        history.push('/backoffice/users/create')
      }
    })()
  }, [history, id])

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          name: usuario.name || '',
          email: usuario.email || '',
          role_id: usuario.role_id || '',
          description: usuario.description || '',
          photo: '',
        }}
        onSubmit={(values) => {
          if (usuario.id) {
            putPrivateHandler(url, usuario.id, values)
          } else {
            console.log('usuario no existe')
            postPrivateHandler(url, values)
          }
          console.log(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(4, 'Debe tener mínimo 4 caracteres')
            .required('Campo obligatorio'),
          email: Yup.string()
            .email('Debe ingresar un email valido')
            .required('Campo obligatorio'),
          role_id: Yup.string().required('Seleccione una opción'),
          description: Yup.string()
            .min(10, 'Debe tener mínimo 10 caracteres')
            .required('Campo obligatorio'),
          photo: Yup.mixed().test(
            'format',
            'Formatos permitidos .jpg .jpeg .png',
            (value) => {
              if (value !== undefined) {
                return /(.jpg|.jpeg|.png)$/i.test(value)
              } else return true
            },
          ),
        })}
      >
        {(formik) => (
          <Form className="form-container">
            <Field
              name="name"
              type="text"
              placeholder="name"
              className="input-field"
            />
            <ErrorMessage name="name" component="span" />
            <Field
              name="email"
              type="text"
              placeholder="email"
              className="input-field"
            />
            <ErrorMessage name="email" component="span" />
            <label className="strong">Seleccionar rol:</label>
            <Field
              name="role_id"
              as="select"
              type="text"
              className="input-field"
            >
              <option value="" disabled>
                Select the role
              </option>
              <option value="1">Administrador</option>
              <option value="2">Usuario</option>
            </Field>
            <ErrorMessage name="role_id" component="span" />
            <label htmlFor="avatar" className="strong">
              Subir imagen de perfil:
            </label>
            <Field name="photo" type="file" className="input-field" />
            <ErrorMessage name="photo" component="span" />
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
  )
}

export default UserForm
