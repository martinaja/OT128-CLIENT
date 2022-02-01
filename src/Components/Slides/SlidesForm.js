import React, { useEffect, useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as Yup from 'yup'
import { Container, TextField, Box, Button, Input } from '@mui/material'
import { toBase64 } from '../../utils/toBase64'
import '../FormStyles.css'
import { useParams, useHistory } from 'react-router-dom'
import postSlide from '../../Services/postSlide'
import getSlide from '../../Services/getSlide'
import getSlides from '../../Services/getSlides'
import putSlide from '../../Services/putSlide'
import { SUPPORTED_FORMATS } from '../../utils/supportedFormatsImg'

const SlidesForm = () => {
  const { slideId } = useParams()
  const history = useHistory()

  const [slide, setSlide] = useState([])
  const [orders, setOrders] = useState([])
  const [imgUploaded, setImgUploaded] = useState(null)
  const [previewImgUploaded, setPreviewImgUploaded] = useState(null)
  const [loader, setLoader] = useState(false)

  const filterOrder = (slides, slide) => {
    const filter = slides.filter((el) => el.order !== slide?.order)
    console.log('FILTER', filter)
    setOrders(filter.map((el) => el.order))
  }

  async function gettingSlides() {
    try {
      setLoader(true)
      const fetchSlides = await getSlides()
      console.log('SLIDES', fetchSlides?.data)
      return fetchSlides?.data
    } catch (e) {
      console.error(e)
      // Insert alert
    } finally {
      setLoader(false)
    }
  }

  async function gettingSlide(id) {
    try {
      setLoader(true)
      const fetchSlide = await getSlide(id)
      const slideData = fetchSlide?.data
      if (slideData) {
        console.log('DATA DE SLIDE', slideData)
        setSlide(slideData)
        return slideData
      }
    } catch (e) {
      console.error(e)
      // Insert alert
      history.push('/backoffice/slides')
    } finally {
      setLoader(false)
    }
  }

  // Fetch
  useEffect(
    () =>
      (async () => {
        const slides = await gettingSlides()
        if (slideId) {
          const slide = await gettingSlide(slideId)
          filterOrder(slides, slide)
        } else {
          setOrders(slides.map((slide) => slide.order))
        }
      })(),
    [slideId],
  )

  // Preview the uploaded image
  useEffect(() => {
    if (!imgUploaded) return
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreviewImgUploaded(reader.result)
    }
    reader.readAsDataURL(imgUploaded)
  }, [imgUploaded])

  const schemaValidate = Yup.object().shape({
    name: Yup.string()
      .min(
        4,
        'Se necesita un nombre que contenga un mínimo de cuatro caracteres',
      )
      .required('Campo requerido'),
    description: Yup.string().required('Descripción requerida'),
    image: Yup.mixed()
      .required('Ingresá una imagen')
      .test(
        'fileType',
        'Sólo se aceptan archivos .jpg, .jpeg, .png',
        (value) => {
          if (value) return SUPPORTED_FORMATS.includes(value.type)
        },
      ),
    order: Yup.number()
      .moreThan(0, 'Debe ser un número mayor o igual a cero')
      .required('Campo requerido')
      .integer('Debe ser un número entero')
      .notOneOf(orders, 'Número de orden ocupado'),
  })

  const handleSubmit = async (data) => {
    console.log('DATA DE FORMIK ANTES DE MANDAR', data)
    // let slideToSend = data;
    //  If  user has uploaded a new image, parse it to send
    // if (imgUploaded) {
    //   const parseImg = await toBase64(data.image);
    //   slideToSend = {
    //     ...data,
    //     image: parseImg,
    //   };
    // }

    const parseImg = await toBase64(data.image)
    const slideToSend = {
      ...data,
      image: parseImg,
    }

    console.log('DATA LISTA PARA ENVIAR', slideToSend)
    if (slideId)
      // Putting a slide
      (async () => {
        try {
          setLoader(true)
          const request = await putSlide(slideId, slideToSend)
          console.log('REQUEST PUT SLIDE', request)
        } catch (e) {
          console.error('REQUEST PUT ERROR', e)
        } finally {
          // Check the changes
          const fetch = await getSlide(slideId)
          const slide = fetch?.data
          console.log('DATA FROM SLIDES BY ID', slide)
          if (slide) {
            setSlide(slide)
          }
          setLoader(false)
        }
      })()
    // Posting a slide
    else
      (async () => {
        try {
          setLoader(true)
          const request = await postSlide(slideToSend)
          console.log('REQUEST POST SLIDE', request)
          // ---> It should redirect to the link of the new slide
        } catch (e) {
          console.error('POST ERROR', e)
        } finally {
          setLoader(false)
        }
      })()
  }

  return loader ? (
    'Cargando'
  ) : (
    <Formik
      enableReinitialize
      initialValues={{
        name: slide?.name || '',
        description: slide?.description || '',
        order: slide?.order || '',
        image: '',
      }}
      validationSchema={schemaValidate}
      onSubmit={(val) => {
        console.log(val)
        handleSubmit(val)
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
          <Box sx={{ boxShadow: 5, p: 5, background: 'white' }}>
            {previewImgUploaded || slide?.image ? (
              <img
                style={{ maxWidth: '100%' }}
                src={previewImgUploaded || slide.image}
                alt={slide.name}
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
                id="order"
                name="order"
                label="Orden"
                value={values.order}
                onChange={handleChange}
                helperText={touched.order && errors.order}
                onBlur={handleBlur}
              />
              <CKEditor
                name="description"
                editor={ClassicEditor}
                data={values.description}
                onChange={(_, editor) => {
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
                    setImgUploaded(file)
                  }}
                  style={{ display: 'none' }}
                />
                <Button fullWidth variant="outlined" component="span">
                  {!previewImgUploaded ? 'Subir imagen' : 'Subir otra imagen'}
                </Button>
                <ErrorMessage component="small" name="image" />
              </label>
              <Button type="submit" variant="contained" fullWidth>
                {slide ? 'Editar slide' : 'Crear slide'}
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default SlidesForm
