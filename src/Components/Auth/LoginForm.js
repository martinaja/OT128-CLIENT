import React from 'react';
import '../FormStyles.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@mui/material';

const LoginForm = () => {
 
    const validateFields = (values) => {    
 const errors = {}
 if (!values.email) {
            errors.email = '* campo obligatorio'
        }
        if (!values.password) {
            errors.password = '* campo obligatorio'
        }
       if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = '* direccion de email incorrecta';
        }
       if (values.password.length < 6) {
            errors.password = '* a longitud minima es 6'
        }
        if (!/^(?=.*\d)(?=.*[a-zA-Záéíóúüñ])(?=.*[$-/:-?{-~!"^_`[\]])/.test(values.password)) {
            errors.password = '* contraseña incorrecta'
        }
 return errors
    }
const handleSubmit = (values) => {
const userInfo = {
            user: values.email,
            password: values.password
        }
    }
return (
       
        <Formik
            initialValues={{ email: '', password: '', confirmPassword: '' }}
            validate={validateFields}
            onSubmit={(values) => handleSubmit(values)}
        >
            {({ isSubmitting }) => (
 <Form className='form-container'>
 
                    <Field type="email" name="email" className='input-field' placeholder="Ingrese email" />
                    <ErrorMessage name="email" component="div" />
                    <Field type="password" name="password" className='input-field' placeholder="Ingrese contraseña" />
                    <ErrorMessage name="password" component="div" />
                    <button className="submit-btn" type="submit">Log In</button>
                </Form>
            )}
        </Formik>
        
    );
}

export default LoginForm; 

