import { deletePrivateHandler, postPrivateHandler, putPrivateHandler } from '../BaseHTTP/privateApiService'
import { getPublicHandler } from '../BaseHTTP/publicApiService'



const slideGetUrl = process.env.REACT_APP_API_SLIDES_GET
const slidePostUrl = process.env.REACT_APP_API_SLIDES_POST
const slidePutUrl = process.env.REACT_APP_API_SLIDES_PUT
const slideDeleteUrl = process.env.REACT_APP_API_SLIDES_DELETE

export const getSlide = (id) => {
  
  return id ? getPublicHandler (slideGetUrl, id) : getPublicHandler (slideGetUrl)
}

export const postSlide = (id, bodydata) => {
  return postPrivateHandler(slidePostUrl, id, bodydata)
}

export const putSlide = (id, bodydata) => {
  return putPrivateHandler(slidePutUrl, id, bodydata)
}

export const deleteSlide = (id) => {
  return deletePrivateHandler(slideDeleteUrl, id)
}
