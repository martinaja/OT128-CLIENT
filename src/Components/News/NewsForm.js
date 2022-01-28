import React, { useEffect, useState } from 'react';
import '../../Components/FormStyles.css';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  MenuItem,
  TextField,
  Box,
  Button,
  Input,
  // Paper,
} from '@mui/material';

const NewsForm = () => {
  // const SUPPORTED_FORMATS = ['image/jpg', 'image/png'];
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const { newsId } = useParams();
  console.log('PARAM', newsId);
  const history = useHistory();
  const [news, setNew] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [img, setImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const [loader, setLoader] = useState(false);

  async function gettingCategories() {
    try {
      setLoader(true);
      const request = await axios.get(process.env.REACT_APP_API_CATEGORIES_GET); // REFACTORIZAR
      const data = request?.data.data;
      setCategories(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  }

  // Check the uploaded img
  useEffect(() => {
    if (!img) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
    reader.readAsDataURL(img);
  }, [img]);

  // Fetch categories
  useEffect(() => {
    gettingCategories();
  }, []);

  // Checking that exist an id for news. In case true, upload a news data
  useEffect(() => {
    if (!newsId) return;
    async function gettingNews(id) {
      try {
        setLoader(true);
        const request = await axios.get(
          `http://ongapi.alkemy.org/api/news/${id}` // REFACTORIZAR
        );
        const data = request?.data.data;
        console.log('DATA FROM NEWS BY ID', data);
        if (data) {
          setNew(data);
          setIsEdit(true);
        }
      } catch (e) {
        console.error(e);
        history.push('/backoffice/news');
        setIsEdit(false);
      } finally {
        setLoader(false);
      }
    }

    gettingNews(newsId);
  }, [newsId, history]);

  const sendNews = async (data) => {
    console.log('DATA DE FORMIK ANTES DE MANDAR', data);
    const parseImg = await toBase64(data.image);
    const newToSend = {
      ...data,
      image: parseImg,
    };
    console.log('PARA HACER SEND', newToSend);
    console.log('IS EDIT?', isEdit);
    if (isEdit) {
      // PUT
      const puttingNews = async (data) => {
        try {
          setLoader(true);
          const request = await axios.put(
            `http://ongapi.alkemy.org/api/news/${newsId}`, // REFACTORIZAR
            data
          );
          console.log('REQ PUT', request);
        } catch (e) {
          console.error('PUT ERROR', e);
        } finally {
          // Check the changes
          const request = await axios.get(
            `http://ongapi.alkemy.org/api/news/${newsId}` // REFACTORIZAR
          );
          const data = request?.data.data;
          console.log('DATA FROM NEWS BY ID', data);
          setNew(data);
          setLoader(false);
        }
      };

      puttingNews(newToSend);
    } else {
      // POST
      const postingNews = async (data) => {
        try {
          setLoader(true);
          const request = await axios.post(
            `http://ongapi.alkemy.org/api/news`, // REFACTORIZAR
            data
          );
          console.log('REQ POST', request);
        } catch (e) {
          console.error('POST ERROR', e);
        } finally {
          setLoader(false);
          // Should redirect the newly created news
        }
      };
      postingNews(newToSend);
    }
  };

  const schemaValidate = Yup.object().shape({
    name: Yup.string()
      .min(
        4,
        'Se necesita un título que contenga un mínimo de cuatro caracteres'
      )
      .required('La noticia debe tener un título'),
    content: Yup.string().required('No podés enviar una noticia sin cuerpo'),
    image: Yup.string().required('Ingresá una imagen'),
    // .test(
    //   'fileType',
    //   'Formato incorrecto. Sólo se aceptan archivos .jpg, .jpeg, .png',
    //   (value) => {
    //     if (value) return SUPPORTED_FORMATS.includes(value.type);
    //   }
    // ),
    category_id: Yup.string().required('Campo requerido'),
  });

  return loader ? (
    'Cargando'
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
        console.log(val);
        sendNews(val);
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
            {previewImg || news.image ? (
              <img
                style={{ maxWidth: '100%' }}
                src={previewImg || news.image}
                alt=''
              />
            ) : null}
            <form onSubmit={handleSubmit}>
              <TextField
                margin='normal'
                fullWidth
                id='name'
                name='name'
                label='Título'
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                helperText={touched.title && errors.title}
                onBlur={handleBlur}
              />
              <TextField
                margin='normal'
                fullWidth
                id='category_id'
                name='category_id'
                select
                label='Categoría'
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
                name='content'
                editor={ClassicEditor}
                data={values.content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setFieldValue('content', data);
                }}
              />
              <ErrorMessage component='small' name='content' />

              <label htmlFor='image'>
                <Input
                  name='image'
                  accept='image/*'
                  id='image'
                  multiple
                  type='file'
                  onChange={(e) => {
                    const file = e.currentTarget.files[0];
                    setFieldValue('image', file);
                    setImg(file);
                  }}
                  style={{ display: 'none' }}
                />
                <Button fullWidth variant='outlined' component='span'>
                  {!previewImg ? 'Subir imagen' : 'Subir otra imagen'}
                </Button>
                <ErrorMessage component='small' name='image' />
              </label>

              <Button type='submit' variant='contained' fullWidth>
                {isEdit ? 'Editar noticia' : 'Crear noticia'}
              </Button>
            </form>
          </Box>
        </Container>
      )}
    </Formik>
  );
};

export default NewsForm;
