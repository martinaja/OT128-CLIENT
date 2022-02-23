import {
  getPrivateHandler,
  deletePrivateHandler,
  postPrivateHandler,
  putPrivateHandler,
  searchPrivateHandler,
} from '../BaseHTTP/privateApiService'

const categoriesGetUrl = process.env.REACT_APP_API_CATEGORIES_GET
const categoriesPostUrl = process.env.REACT_APP_API_CATEGORIES_POST
const categoriesPutUrl = process.env.REACT_APP_API_CATEGORIES_PUT
const categoriesDeleteUrl = process.env.REACT_APP_API_CATEGORIES_DELETE
const categoriesSearchUrl = '/categories?search='

export const getCategories = (id) => {
  return getPrivateHandler(categoriesGetUrl, id)
}

export const postCategories = (id, bodydata) => {
  return postPrivateHandler(categoriesPostUrl, id, bodydata)
}

export const putCategories = (id, bodydata) => {
  return putPrivateHandler(categoriesPutUrl, id, bodydata)
}

export const deleteCategories = (id) => {
  return deletePrivateHandler(categoriesDeleteUrl, id)
}

export const searchCategories = (name) => {
  return searchPrivateHandler(categoriesSearchUrl, name)
}
