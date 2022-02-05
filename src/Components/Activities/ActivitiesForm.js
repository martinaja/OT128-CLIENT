import '../FormStyles.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import convertBase64, { SUPPORTED_FORMATS } from '../../utils/toBase64'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ActivitiesForm = () => {
  const { id } = useParams()

  useEffect(() => {
    console.log(id)
  })

  const [state, setState] = useState({
    responseServer: '',
    id: undefined,
    isLoading: false,
  })
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
    setState({ ...state, isLoading: true })
    let responseServer = undefined
    const imageBase64 = await convertBase64(formData.image)
    setState({ ...state, isLoading: false })
  }

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
    </form>
  )
}

export default ActivitiesForm
