import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { postContact } from '../../Services/apiServices/contactApiService'
import * as Yup from 'yup'

import '../FormStyles.css'
import { alertServiceError } from '../AlertService'

export const ContactForm = () => {
  const sendContact = (data) =>
    (async () => {
      const request = await postContact(data)
      if (request.error) {
        alertServiceError(
          request.message,
          'se produjo un error al intentar enviar su formulario de contacto. Por favor, intente nuevamente mas tarde.',
        )
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
          name: Yup.string().required('Campo obligatorio'),
          email: Yup.string()
            .email('Debe ingresar un email valido')
            .required('Campo obligatorio'),
          phone: Yup.number()
            .typeError('Solo puede ingresar números')
            .min(8, 'El número debe tener al menos 8 dígitos')
            .required('Campo obligatorio'),
          message: Yup.string().required('Campo obligatorio'),
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
            <Field
              name="phone"
              type="text"
              placeholder="phone"
              className="input-field"
            ></Field>
            <ErrorMessage name="phone" component="span" />
            <Field
              name="message"
              type="text"
              placeholder="message"
              className="input-field"
            />
            <ErrorMessage name="message" component="span" />
            <button className="submit-btn" type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
