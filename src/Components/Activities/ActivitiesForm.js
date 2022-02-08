import '../FormStyles.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { toBase64 } from '../../utils/toBase64'
import { SUPPORTED_FORMATS } from '../../utils/supportedFormatsImg'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LinearProgressFeedback } from '../LinearProgress'
import {
  postActivity,
  putActivity,
} from '../../Services/apiServices/activitiesApiService'
import { alertServiceInfoTimer } from '../AlertService'

const ActivitiesForm = () => {
  let id = useParams().id
  const [responseServer, setResponseServer] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const formikInitialValues = {
    name: '',
    description: '',
    image: undefined,
  }
  const formikValidationSchema = Yup.object({
    name: Yup.string().required('Required'),
    description: Yup.string(),
    image: Yup.mixed()
      .test('fileType', 'File must be an image jpg or png', (value) => {
        if (value) return SUPPORTED_FORMATS.includes(value && value.type)
      })
      .required('Required'),
  })

  const handleSubmit = async (formData) => {
    setIsLoading(true)
    const imageBase64 = await toBase64(formData.image)
    console.log(id)
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
    setIsLoading(false)
  }

  useEffect(() => {
    setTimeout(() => {
      setResponseServer(undefined)
    }, 3100)
    console.log(responseServer)
  }, [responseServer])

  const formik = useFormik({
    initialValues: formikInitialValues,
    validationSchema: formikValidationSchema,
    onSubmit: handleSubmit,
  })

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <input
        className="input-field"
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        placeholder="Activity Title"
        error={formik.errors.name}
      />
      {formik.errors.name}
      <CKEditor
        editor={ClassicEditor}
        data={formik.values.description}
        onChange={(event, editor) => {
          const data = editor.getData()
          formik.setFieldValue('description', data)
        }}
      />
      {formik.errors.description}
      <label htmlFor="image">Upload Image:</label>
      <input
        type="file"
        name="image"
        onChange={(e) => {
          formik.setFieldValue('image', e.target.files[0])
        }}
        error={formik.errors.image}
      />
      {formik.errors.image}
      <button className="submit-btn" type="submit">
        Send
      </button>
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
  )
}

export default ActivitiesForm
