import { getHandler } from './publicApiService'
import { postHandler, putHandler, deleteHandler } from './privateApiService'

const newsGetUrl = process.env.REACT_APP_API_NEWS_GET
const newsPostUrl = process.env.REACT_APP_API_NEWS_POST
const newsPutUrl = process.env.REACT_APP_API_NEWS_PUT
const newsDeleteUrl = process.env.REACT_APP_API_NEWS_DELETE

export const getNews = async (id) => {
  const response = await getHandler(newsGetUrl, id)
  return response ? response.data : false
}

export const createNew = async (body) => {
  const response = await postHandler(newsPostUrl, body)
  return response ? response.data : false
}

export const updateNew = async (id, body) => {
  const response = await putHandler(newsPutUrl, id, body)
  return response ? response.data : false
}

export const deleteNew = async (id) => {
  const response = await deleteHandler(newsDeleteUrl, id)
  return response ? response.data : false
}
