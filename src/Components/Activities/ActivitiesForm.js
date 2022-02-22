import '../FormStyles.css'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toBase64 } from '../../utils/toBase64'
import { SUPPORTED_FORMATS } from '../../utils/supportedFormatsImg'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { LinearProgressFeedback } from '../LinearProgress'
import {
  postActivity,
  putActivity,
} from '../../Services/apiServices/activitiesApiService'
import { alertServiceError, alertServiceInfoTimer } from '../AlertService'
import {
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from '@mui/material'

const ActivitiesForm = () => {
  let id = useParams().id
  const [responseServer, setResponseServer] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const history = useHistory()

  const formikInitialValues = {
    name: '',
    description: '',
    image: undefined,
  }
  const formikValidationSchema = Yup.object({
    name: Yup.string().required('El  nombre es requerido.'),
    description: Yup.string(),
    image: Yup.mixed()
      .required('ingrese una imagen')
      .test(
        'fileType',
        'Formato incorrecto. Sólo se aceptan archivos .jpg, .jpeg, .png',
        (value) => {
          if (value) return SUPPORTED_FORMATS.includes(value && value.type)
        },
      ),
  })

  const handleSubmit = async (formData) => {
    setIsLoading(true)
    const imageBase64 = await toBase64(formData.image)
    if (id) {
      setResponseServer(
        await putActivity(id, {
          ...formData,
          image: imageBase64,
        }),
      )
    } else {
      setResponseServer(
        await postActivity({
          ...formData,
          image: imageBase64,
        }),
      )
    }

    // alert in case of fail to update or create a new activity
    if (responseServer.error) {
      alertServiceError(
        responseServer.message,
        'Se produjo un error al crear o editar una actividad.',
      )
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (responseServer?.error) {
      alertServiceError('Error', responseServer.message)
      setIsLoading(false)
    } else if (responseServer?.data) {
      alertServiceInfoTimer(
        'top',
        'info',
        responseServer.data.message,
        false,
        3000,
      )
      setIsLoading(false)
      setTimeout(() => {
        setResponseServer(undefined)
        history.push('/backoffice/activities')
      }, 3000)
    }
  }, [responseServer, history])

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
            <Typography variant="h4">
              {!id ? 'Crear Actividad' : 'Editar Actividad'}
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={touched.name && errors.name}
                label="Título Actividad"
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
                />
                <Button fullWidth variant="outlined" component="span">
                  subir imagen
                </Button>
                <ErrorMessage component="small" name="image" />
              </label>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isLoading}
              >
                {id ? 'Editar actividad' : 'Crear actividad'}
              </Button>
              <LinearProgressFeedback isActive={isLoading} />
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default ActivitiesForm
