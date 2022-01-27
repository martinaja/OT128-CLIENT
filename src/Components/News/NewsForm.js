import React, { useEffect, useState } from 'react';
import '../../Components/FormStyles.css';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const NewsForm = () => {
  const { newsId } = useParams();
  console.log('PARAM', newsId);
  const history = useHistory();
  const [news, setNew] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
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

  // Fetch categories
  useEffect(() => {
    gettingCategories();
  }, []);

  // Checking that exist an id for news. In case true, upload a new data
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
        setNew(data);
        setIsEdit(true);
      } catch (e) {
        console.error(e);
        history.push('/backoffice/news');
      } finally {
        setLoader(false);
      }
    }

    gettingNews(newsId);
  }, [newsId, history]);

  const handleSumbit = (data) => {
    console.log('PARA HACER POST', data);
    if (isEdit) {
      // PUT
    } else {
      // POST
    }
  };

  const initialValues = {
    title: news.name || '',
    content: news.content || '',
    category: news.category || '',
  };

  const schemaValidate = Yup.object().shape({
    title: Yup.string()
      .min(
        4,
        'Se necesita un título que contenga un mínimo de cuatro caracteres'
      )
      .required('La novedad debe tener un título'),
    content: Yup.string().required('Campo requerido'),
    // image: Yup.string().required('Campo requerido'),
    category: Yup.string().required('Campo requerido'),
  });

  return loader ? (
    'Cargando'
  ) : (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={schemaValidate}
      onSubmit={(values) => {
        handleSumbit(values);
      }}
    >
      {(formik) => (
        <Form className='form-container'>
          <Field type='text' name='title' className='input-field' />
          <ErrorMessage name='title' component='div' />
          {/* <Field type='text' name='content' className='input-field' /> */}
          <CKEditor
            name='content'
            editor={ClassicEditor}
            data={initialValues.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              formik.setFieldValue('content', data);
              console.log('VAL', initialValues);
            }}
          />
          <ErrorMessage name='content' component='div' />
          {/* <Field type='file' name='image' className='input-field' /> */}
          <select className='select-field' name='category'>
            <option value='' disabled>
              Select category
            </option>
            {categories.map((cat) => (
              <option key={cat.id}>{cat.name}</option>
            ))}
          </select>
          <button className='submit-btn' type='submit'>
            {isEdit ? 'Editar' : 'Crear'}
          </button>
        </Form>
      )}
    </Formik>
  );

  //   return (
  //     <form className='form-container' onSubmit={handleSubmit}>
  //       <input
  //         className='input-field'
  //         type='text'
  //         name='title'
  //         value={initialValues.title || ''}
  //         onChange={handleChange}
  //       ></input>
  //       <input
  //         className='input-field'
  //         type='text'
  //         name='content'
  //         value={initialValues.content || ''}
  //         onChange={handleChange}
  //       ></input>
  //       <input
  //         className='input-field'
  //         type='file'
  //         name='image'
  //         onChange={handleChange}
  //       ></input>
  // <select
  //   className='select-field'
  //   name='category'
  //   value={initialValues.category || ''}
  //   onChange={handleChange}
  // >
  // <option value='' disabled>
  //   Select category
  // </option>
  // <option value='1'>Demo option 1</option>
  // <option value='2'>Demo option 2</option>
  // <option value='3'>Demo option 3</option>
  // </select>
  //       <button className='submit-btn' type='submit'>
  //         Send
  //       </button>
  //     </form>
  //   );
};

export default NewsForm;
