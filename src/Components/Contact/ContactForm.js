import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { postContact } from '../../Services/apiServices/contactApiService'
import * as Yup from 'yup'

import '../FormStyles.css'
import { alertServiceError, alertServiceInfoTimer } from '../AlertService'
import { Box, Grid, Typography } from '@mui/material'

export const ContactForm = () => {
  const sendContact = (data) =>
    (async () => {
      const request = await postContact(data)
      if (request.error || request.data.success === false) {
        alertServiceError(
          'Error!',
          'se produjo un error al intentar enviar su formulario de contacto. Por favor, intente nuevamente mas tarde.',
        )
      } else if (request.data.success === true) {
        alertServiceInfoTimer('Los datos se enviaron correctamente', true, 2000)
      }
    })()

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
        }}
        onSubmit={(values) => {
          sendContact(values)
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('El campo nombre es obligatorio'),
          email: Yup.string()
            .email('Debe ingresar un email valido')
            .required('El campo email es obligatorio'),
          phone: Yup.number()
            .typeError('Solo puede ingresar números')
            .min(8, 'El número debe tener al menos 8 dígitos')
            .required('Numero de telefono obligatorio'),
          message: Yup.string().required('Ingrese su mensaje'),
        })}
      >
        {(formik) => (
          <>
            {' '}
            <Typography
              display={{ xs: 'block', md: 'none' }}
              sx={{ mt: 4, mb: 2 }}
              variant="h2"
              component="div"
            >
              Formulario de contacto
            </Typography>
            <Grid container spacing={0} sx={{ mb: 3 }}>
              <Grid item md={4}>
                <Box
                  sx={{
                    background: 'white',
                    py: 1,
                    boxShadow: 3,
                    display: 'grid',
                    height: '100%',
                  }}
                >
                  <Form className="form-container">
                    <Field
                      name="name"
                      type="text"
                      placeholder="nombre"
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
                    <Field
                      name="phone"
                      type="text"
                      placeholder="telefono"
                      className="input-field"
                    ></Field>
                    <ErrorMessage name="phone" component="span" />
                    <Field
                      name="message"
                      type="text"
                      placeholder="mensaje"
                      className="input-field"
                    />
                    <ErrorMessage name="message" component="span" />
                    <button className="submit-btn" type="submit">
                      enviar
                    </button>
                  </Form>
                </Box>
              </Grid>

              <Grid item md={8}>
                <Box
                  display={{ xs: 'none', md: 'block' }}
                  sx={{ boxShadow: 3 }}
                  height={'100%'}
                >
                  <img width="100%" src="/images/formulario de contacto.png" />
                </Box>
              </Grid>
            </Grid>
          </>
        )}
      </Formik>
    </>
  )
}
