import { getHandler } from './publicApiService'
import { postHandler, putHandler, deleteHandler } from './privateApiService'

const slidesGetUrl = process.env.REACT_APP_API_SLIDES_GET
const slidesPostUrl = process.env.REACT_APP_API_SLIDES_POST
const slidesPutUrl = process.env.REACT_APP_API_SLIDES_PUT
const slidesDeleteUrl = process.env.REACT_APP_API_SLIDES_DELETE

export const getSlides = async (id) => {
  const response = await getHandler(slidesGetUrl, id)
  return response ? response.data : false
}

export const createSlide = async (body) => {
  const response = await postHandler(slidesPostUrl, body)
  return response ? response.data : false
}

export const updateSlide = async (id, body) => {
  const response = await putHandler(slidesPutUrl, id, body)
  return response ? response.data : false
}

export const deleteSlide = async (id) => {
  const response = await deleteHandler(slidesDeleteUrl, id)
  return response ? response.data : false
}
