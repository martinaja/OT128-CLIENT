import {
  deletePrivateHandler,
  postPrivateHandler,
  putPrivateHandler,
} from '../BaseHTTP/privateApiService'
import { getPublicHandler } from '../BaseHTTP/publicApiService'

const usersGetUrl = process.env.REACT_APP_API_USERS_GET
const usersPostUrl = process.env.REACT_APP_API_USERS_POST
const usersPutUrl = process.env.REACT_APP_API_USERS_PUT
const usersDeleteUrl = process.env.REACT_APP_API_USERS_DELETE

export const getUsers = (id) => {
  return getPublicHandler(testimonyGetUrl, id)
}

export const postUsers = (id, bodydata) => {
  return postPrivateHandler(testimonyPostUrl, id, bodydata)
}

export const putUsers = (id, bodydata) => {
  return putPrivateHandler(testimonyPutUrl, id, bodydata)
}

export const deleteUsers = (id) => {
  return deletePrivateHandler(testimonyDeleteUrl, id)
}
