import {
  deletePrivateHandler,
  postPrivateHandler,
  putPrivateHandler,
  searchPrivateHandler,
} from '../BaseHTTP/privateApiService'
import { getPublicHandler } from '../BaseHTTP/publicApiService'

const newsGetUrl = process.env.REACT_APP_API_NEWS_GET
const newsPostUrl = process.env.REACT_APP_API_NEWS_POST
const newsPutUrl = process.env.REACT_APP_API_NEWS_PUT
const newsDeleteUrl = process.env.REACT_APP_API_NEWS_DELETE

export const getNews = (id) => {
  return getPublicHandler(newsGetUrl, id)
}

export const postNews = (id, bodydata) => {
  return postPrivateHandler(newsPostUrl, id, bodydata)
}

export const putNews = (id, bodydata) => {
  return putPrivateHandler(newsPutUrl, id, bodydata)
}

export const deleteNews = (id) => {
  return deletePrivateHandler(newsDeleteUrl, id)
}

export const searchNews = (name, category) => {
  return searchPrivateHandler(
    newsGetUrl,
    `?search=${name}&category=${category}`,
  )
}
