// import { getPublicHandler } from '../BaseHTTP/publicApiService'
import {
  postPrivateHandler,
  putPrivateHandler,
  deletePrivateHandler,
  getPrivateHandler,
} from '../BaseHTTP/privateApiService'

const memberGetUrl = process.env.REACT_APP_API_MEMBERS_GET
const memberPostUrl = process.env.REACT_APP_API_MEMBERS_POST
const memberPutUrl = process.env.REACT_APP_API_MEMBERS_PUT
const memberDeleteUrl = process.env.REACT_APP_API_MEMBERS_DELETE

export const getMembers = (id) => {
  return getPrivateHandler(memberGetUrl, id)
}

export const postActivity = (id, bodydata) => {
  return postPrivateHandler(memberPostUrl, id, bodydata)
}

export const putActivity = (id, bodydata) => {
  return putPrivateHandler(memberPutUrl, id, bodydata)
}

export const deleteActivity = (id) => {
  return deletePrivateHandler(memberDeleteUrl, id)
}
