import {
  deletePrivateHandler,
  postPrivateHandler,
  putPrivateHandler,
  getPrivateHandler,
} from '../BaseHTTP/privateApiService'

const usersGetUrl = process.env.REACT_APP_API_USERS_GET
const usersPostUrl = process.env.REACT_APP_API_USERS_POST
const usersPutUrl = process.env.REACT_APP_API_USERS_PUT
const usersDeleteUrl = process.env.REACT_APP_API_USERS_DELETE

export const getUsers = (id) => {
  return getPrivateHandler(usersGetUrl, id)
}

export const postUsers = (id, bodydata) => {
  return postPrivateHandler(usersPostUrl, id, bodydata)
}

export const putUsers = (id, bodydata) => {
  return putPrivateHandler(usersPutUrl, id, bodydata)
}

export const deleteUsers = (id) => {
  return deletePrivateHandler(usersDeleteUrl, id)
}

export const searchUsers = ({ name, type }) => {
  let searchParams
  searchParams = `${usersGetUrl}?search=${name}&role=${type}`
  return getPrivateHandler(searchParams)
}
