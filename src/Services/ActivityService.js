import {
    getHandler,
    postHandler,
    putHandler,
    deleteHandler,
  } from './privatePublicService'
  
  const categoriesGetUrl = process.env.REACT_APP_API_CATEGORIES_GET
  const categoriesPostUrl = process.env.REACT_APP_API_CATEGORIES_POST
  const categoriesPutUrl = process.env.REACT_APP_API_CATEGORIES_PUT
  const categoriesDeleteUrl = process.env.REACT_APP_API_CATEGORIES_DELETE
  
  export const getAcitivities = (id) => {
    return getHandler(categoriesGetUrl, id)
  }
  
  export const postActivities = (id, bodydata) => {
    return postHandler(categoriesPostUrl, id, bodydata)
  }
  
  export const putAcitivities = (id, bodydata) => {
    return putHandler(categoriesPutUrl, id, bodydata)
  }
  
  export const deleteActivities = (id) => {
    return deleteHandler(categoriesDeleteUrl, id)
  }