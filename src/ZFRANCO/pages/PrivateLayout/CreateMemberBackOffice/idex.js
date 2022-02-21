import React, { useEffect, useState } from 'react'

import { Box, Button, Container, Input, TextField } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

import styles from './index.module.css'

export const CreateMemberBackOffice = () => {
  const SUPPORTED_FORMATS = ['image/jpg', 'image/png', 'image/jpeg']

  const [memberImg, setMemberImg] = useState(null)
  const [previewMemberImg, setPreviewMemberImg] = useState(null)

  useEffect(() => {
    if (!memberImg) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewMemberImg(reader.result)
    }
    reader.readAsDataURL(memberImg)
  }, [memberImg])

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Debe tener al menos cuatro caracteres')
      .required('El campo nombre es obligatorio.'),

    description: Yup.string().required('El campo descripción es obligatorio.'),

    image: Yup.mixed()
      .required('Ingresá una imagen')
      .test(
        'fileType',
        'Sólo se aceptan archivos .jpg, .jpeg, .png',
        (value) => {
          if (value) return SUPPORTED_FORMATS.includes(value.type)
        },
      ),
    facebookUrl: Yup.string()
      .matches(
        /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w-]*)?/,
        'El link debe ser de Facebook',
      )
      .required('Ingresar al menos un link de redes sociales'),
    linkedinUrl: Yup.string()
      .matches(
        /(?:(?:http|https):\/\/)?(?:www.)?linkedin.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w-]*)?/,
        'El link debe ser de LinkedIn',
      )
      .required('Ingresar al menos un link de redes sociales'),
  })
  return (
    <Formik
      enableReinitialize
      initialValues={{
        name: '',
        image: '',
        description: '',
        facebookUrl: '',
        linkedinUrl: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('DATA A ENVIAR', values)
        // Inser API fetch
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
          <Box sx={{ boxShadow: 5, p: 5, mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                name="name"
                label="Nombre"
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
                  const data = editor.getData()
                  setFieldValue('description', data)
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
                    const file = e.currentTarget.files[0]
                    setFieldValue('image', file)
                    setMemberImg(file)
                  }}
                  style={{ display: 'none' }}
                />

                <Button fullWidth variant="outlined" component="span">
                  Subir imagen.
                </Button>
                <ErrorMessage component="small" name="image" />
              </label>

              {previewMemberImg ? (
                <img
                  style={{ maxWidth: '100%' }}
                  src={previewMemberImg}
                  alt="Perfil"
                />
              ) : null}

              <TextField
                InputProps={{ startAdornment: <FacebookIcon /> }}
                fullWidth
                variant="standard"
                margin="normal"
                id="facebookUrl"
                name="facebookUrl"
                label="Perfil de Facebook"
                value={values.facebookUrl}
                onChange={handleChange}
                error={touched.facebookUrl && Boolean(errors.facebookUrl)}
                helperText={touched.facebookUrl && errors.facebookUrl}
                onBlur={handleBlur}
              />
              <TextField
                InputProps={{ startAdornment: <LinkedInIcon /> }}
                fullWidth
                variant="standard"
                margin="normal"
                id="linkedinUrl"
                name="linkedinUrl"
                label="Perfil de LinkedIn"
                value={values.linkedinUrl}
                onChange={handleChange}
                error={touched.linkedinUrl && Boolean(errors.linkedinUrl)}
                helperText={touched.linkedinUrl && errors.linkedinUrl}
                onBlur={handleBlur}
              />

              <Button type="submit" variant="contained" fullWidth>
                Confirmar Edición
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  )
}
