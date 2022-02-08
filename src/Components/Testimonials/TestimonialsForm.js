import '../FormStyles.css'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toBase64 } from '../../utils/toBase64'
import { SUPPORTED_FORMATS } from '../../utils/supportedFormatsImg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LinearProgressFeedback } from '../LinearProgress'
import {
  postTestimony,
  putTestimony,
} from '../../Services/apiServices/testimonyApiService'
import { alertServiceInfoTimer } from '../AlertService'
import { Box, Button, Container, Input, TextField } from '@mui/material'

const TestimonialForm = () => {
  let id = useParams().id
  const [responseServer, setResponseServer] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const formikInitialValues = {
    name: '',
    description: '',
    image: undefined,
  }
  const formikValidationSchema = Yup.object({
    name: Yup.string().min(4).required('El nombre es requerido.'),
    description: Yup.string().required('La descripción es requerida.'),
    image: Yup.mixed()
      .required('ingrese una imagen')
      .test('fileType', 'File must be an image jpg or png', (value) => {
        if (value) return SUPPORTED_FORMATS.includes(value && value.type)
      }),
  })

  const handleSubmit = async (formData) => {
    setIsLoading(true)
    const imageBase64 = await toBase64(formData.image)
    console.log(id)
    if (id) {
      setResponseServer(
        await putTestimony(id, {
          ...formData,
          image: imageBase64,
        }),
      )
    } else {
      setResponseServer(
        await postTestimony({
          ...formData,
          image: imageBase64,
        }),
      )
    }
    setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setResponseServer(undefined)
    }, 3000)
    console.log(responseServer)
  }, [responseServer])

  return (
    <Formik
      enableReinitialize
      initialValues={formikInitialValues}
      validationSchema={formikValidationSchema}
      onSubmit={handleSubmit}
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
            <form className="form-container" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name && errors.name}
                label="Título Testimonio"
                error={touched.name && Boolean(errors.name)}
              />
              <CKEditor
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
                  type="file"
                  name="image"
                  accept="image/*"
                  id="image"
                  style={{ display: 'none' }}
                  onChange={(e) => {
                    setFieldValue('image', e.target.files[0])
                  }}
                  error={errors.image}
                />
                <Button fullWidth variant="outlined" component="span">
                  subir imagen
                </Button>
                <ErrorMessage component="small" name="image" />
              </label>
              <Button fullWidth type="submit" variant="contained">
                {id ? 'Editar testimonio' : 'Crear testimonio'}
              </Button>
              {responseServer !== undefined
                ? alertServiceInfoTimer(
                    'start',
                    'info',
                    responseServer.data.message,
                    false,
                    3000,
                  )
                : null}
              <LinearProgressFeedback isActive={isLoading} />
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default TestimonialForm
