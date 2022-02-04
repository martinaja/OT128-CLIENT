import {
  getHandler,
  postHandler,
  putHandler,
  deleteHandler,
} from './privateApiService'

const categoriesGetUrl = process.env.REACT_APP_API_CATEGORIES_GET
const categoriesPostUrl = process.env.REACT_APP_API_CATEGORIES_POST
const categoriesPutUrl = process.env.REACT_APP_API_CATEGORIES_PUT
const categoriesDeleteUrl = process.env.REACT_APP_API_CATEGORIES_DELETE

export const getCategories = (id) => {
  return getHandler(categoriesGetUrl, id)
}

export const postCategories = (id, bodydata) => {
  return postHandler(categoriesPostUrl, id, bodydata)
}

export const putCategories = (id, bodydata) => {
  return putHandler(categoriesPutUrl, id, bodydata)
}

export const deleteCategories = (id) => {
  return deleteHandler(categoriesDeleteUrl, id)
}
