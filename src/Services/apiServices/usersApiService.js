import {
  deletePrivateHandler,
  postPrivateHandler,
  putPrivateHandler,
  getPrivateHandler,
  searchPrivateHandler,
} from '../BaseHTTP/privateApiService'

const usersGetUrl = process.env.REACT_APP_API_USERS_GET
const usersPostUrl = process.env.REACT_APP_API_USERS_POSTPrivate
const usersPutUrl = process.env.REACT_APP_API_USERS_PUT
const usersDeleteUrl = process.env.REACT_APP_API_USERS_DELETE
const userSearchUrl = process.env.REACT_APP_API_USERS_SEARCH

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
  searchParams = `?search=${name}&role=${type}`
  return searchPrivateHandler(userSearchUrl, searchParams)
}
