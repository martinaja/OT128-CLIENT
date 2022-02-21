import React from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { postContact } from '../../../../services/ApiServices/contactApiService'

import { alertServiceError } from '../../../../services/AlertService/AlertService'

import styles from './ContactForm.module.css'

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
          <Form className={styles.form__container}>
            <Field
              name="name"
              type="text"
              placeholder="name"
              className={styles.input__field}
            />
            <ErrorMessage name="name" component="span" />
            <Field
              name="email"
              type="text"
              placeholder="email"
              className={styles.input__field}
            />
            <ErrorMessage name="email" component="span" />
            <Field
              name="phone"
              type="text"
              placeholder="phone"
              className={styles.input__field}
            ></Field>
            <ErrorMessage name="phone" component="span" />
            <Field
              name="message"
              type="text"
              placeholder="message"
              className={styles.input__field}
            />
            <ErrorMessage name="message" component="span" />
            <button className={styles.submit__btn} type="submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </>
  )
}
