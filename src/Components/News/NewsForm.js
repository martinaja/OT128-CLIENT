import React, { useEffect, useState } from 'react'
import '../../Components/FormStyles.css'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { useHistory, useParams } from 'react-router-dom'
import { ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import {
  Container,
  MenuItem,
  TextField,
  Box,
  Button,
  Input,
} from '@mui/material'
import { toBase64 } from '../../utils/toBase64'
import { getCategories } from '../../Services/apiServices/categoriesApiService'
import {
  getNews,
  postNews,
  putNews,
} from '../../Services/apiServices/newsApiService'
import { alertServiceError } from '../AlertService'
import ButtonLoader from '../ButtonLoader/ButtonLoader'

const NewsForm = () => {
  const { newsId } = useParams()
  const history = useHistory()

  const [news, setNew] = useState([])
  const [categories, setCategories] = useState([])
  const [isEditable, setIsEditable] = useState(false)
  const [imgUploaded, setImgUploaded] = useState(null)
  const [previewImgUploaded, setPreviewImgUploaded] = useState(null)

  const [loader, setLoader] = useState(false)
  const [btnLoader, setBtnLoader] = useState(false)

  // Fetch categories
  useEffect(
    () =>
      (async () => {
        setLoader(true)

        const fetchCategories = await getCategories()
        if (fetchCategories.error)
          alertServiceError(
            fetchCategories.message,
            'No se pudo obtener la información solicitada',
          )

        const dataCategories = fetchCategories?.data?.data
        console.log('CATEGORIES', dataCategories)

        dataCategories
          ? setCategories(dataCategories)
          : alertServiceError(
              'No se pudo cargar la noticia',
              'Verificá que la URL sea correcta',
            )

        setLoader(false)
      })(),
    [],
  )

  // Checking that exist an id from a news. In case true, upload a news data
  useEffect(() => {
    if (!newsId) return
    ;(async () => {
      setLoader(true)

      const fetchNews = await getNews(newsId)
      if (fetchNews.error) {
        alertServiceError(
          fetchNews.message,
          'No se pudo obtener la información solicitada',
        )
        setIsEditable(false)
        history.push('/backoffice/news')
      }

      const dataNews = fetchNews.data?.data
      console.log('DATA DE LA NOTICIA', dataNews)

      if (dataNews) {
        setNew(dataNews)
        setIsEditable(true)
      } else {
        alertServiceError('No se pudo cargar la noticia', 'ID inválido')
        history.push('/backoffice/news')
      }

      setLoader(false)
    })()
  }, [newsId, history])

  // Preview the uploaded image
  useEffect(() => {
    if (!imgUploaded) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImgUploaded(reader.result)
    }
    reader.readAsDataURL(imgUploaded)
  }, [imgUploaded])

  const sendNews = async (data) => {
    setBtnLoader(true)
    console.log('DATA DE FORMIK ANTES DE MANDAR', data)
    // let newsToSend = data;
    //  If  user has uploaded a new image, parse it to send
    // if (imgUploaded) {
    //   const parseImg = await toBase64(data.image);
    //   newsToSend = {
    //     ...data,
    //     image: parseImg,
    //   };
    // }

    const parseImg = await toBase64(data.image)
    const newsToSend = {
      ...data,
      image: parseImg,
    }

    console.log('DATA LISTA PARA ENVIAR', newsToSend)
    if (isEditable)
      // Putting a news
      (async () => {
        const putRequest = await putNews(newsId, newsToSend)
        console.log('REQUEST PUT NEWS', putRequest)
        if (putRequest.error) {
          alertServiceError(
            putRequest.message,
            'No se pudo editar la información',
          )
        } else {
          history.push(`/novedades/${newsId}`)
        }

        // Redirect to the news
        const fetch = await getNews(newsId)
        const data = fetch.data?.data
        console.log('DATA FROM NEWS BY ID', data)
        data
          ? setNew(data)
          : alertServiceError(
              'No se pudo cargar la noticia',
              'Verificá que la URL sea correcta',
            )

        setBtnLoader(false)
      })()
    // Posting a news
    else
      (async () => {
        const postRequest = await postNews(newsToSend)
        console.log('REQUEST POST NEWS', postRequest)
        if (postRequest.error)
          alertServiceError(
            postRequest.message,
            'No se pudo enviar la información',
          )

        setBtnLoader(false)

        // ---> Redirect to the new news
        if (postRequest.statusText === 'OK') {
          const postRequestData = postRequest.data?.data
          const newNewsID = postRequestData?.id
          history.push(`/novedades/${newNewsID}`)
        }
      })()
  }

  const schemaValidate = Yup.object().shape({
    name: Yup.string()
      .min(
        4,
        'Se necesita un título que contenga un mínimo de cuatro caracteres',
      )
      .required('La noticia debe tener un título'),
    content: Yup.string().required('No podés enviar una noticia sin cuerpo'),
    image: Yup.string().required('Imagen requerida'),
    category_id: Yup.string().required('Categoría requerida'),
  })

  return loader ? (
    'Cargando...'
  ) : (
    <Formik
      enableReinitialize
      initialValues={{
        name: news.name || '',
        content: news.content || '',
        category_id: '',
        image: '',
      }}
      validationSchema={schemaValidate}
      onSubmit={(val) => {
        sendNews(val)
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
          <Box sx={{ boxShadow: 5, p: 5 }}>
            {previewImgUploaded || news.image ? (
              <img
                style={{ maxWidth: '100%' }}
                src={previewImgUploaded || news.image}
                alt=""
              />
            ) : null}
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                name="name"
                label="Título"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                onBlur={handleBlur}
              />
              <TextField
                margin="normal"
                fullWidth
                id="category_id"
                name="category_id"
                select
                label="Categoría"
                value={values.category_id}
                onChange={handleChange}
                helperText={touched.category_id && errors.category_id}
                onBlur={handleBlur}
              >
                {categories.map((cat, i) => (
                  <MenuItem key={i} value={cat.id}>
                    {cat.name}-{cat.id}
                  </MenuItem>
                ))}
              </TextField>
              <CKEditor
                name="content"
                editor={ClassicEditor}
                data={values.content}
                onChange={(_, editor) => {
                  const data = editor.getData()
                  setFieldValue('content', data)
                }}
              />
              <ErrorMessage component="small" name="content" />
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
                    setImgUploaded(file)
                  }}
                  style={{ display: 'none' }}
                />
                <Button fullWidth variant="outlined" component="span">
                  {!previewImgUploaded ? 'Subir imagen' : 'Subir otra imagen'}
                </Button>
                <ErrorMessage component="small" name="image" />
              </label>
              <ButtonLoader
                label={isEditable ? 'Editar noticia' : 'Crear noticia'}
                loading={btnLoader}
              />
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default NewsForm
