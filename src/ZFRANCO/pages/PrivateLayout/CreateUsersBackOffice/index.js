import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { putUsers } from '../../../services/ApiServices/usersApiService'

import Swal from 'sweetalert2-react-content'

import { Terms } from './Terms'

export const CreateUserBackOffice = (usuario) => {
  const [display, setDisplay] = useState(false)

  return (
    <Box sx={{ pt: '60px', pl: 2 }}>
      <Formik
        initialValues={{
          name: usuario.name || '',
          email: usuario.email || '',
          role_id: usuario.role_id || '',
          description: '',
          photo: '',
        }}
        onSubmit={(values) => {
          Swal.fire({
            title: 'Acepta los términos y condiciones?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
          }).then((result) => {
            if (result.isConfirmed) {
              if (usuario.id) {
                putUsers(usuario.id, values)
              } else {
                console.log('usuario no existe')
              }
              Swal.fire('Datos procesados', '', 'success')
            }
          })
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

      <Button
        sx={{ width: '250px' }}
        variant="contained"
        onClick={() => setDisplay(!display)}
      >
        Términos y condiciones
      </Button>
      <Box sx={{ display: display ? 'block' : 'none' }}>
        <Terms />
      </Box>
    </Box>
  )
}
