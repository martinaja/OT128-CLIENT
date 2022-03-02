import {
  getPrivateHandler,
  deletePrivateHandler,
  postPrivateHandler,
  putPrivateHandler,
} from '../BaseHTTP/privateApiService'
import { getPublicHandler } from '../BaseHTTP/publicApiService'

const activityGetUrl = process.env.REACT_APP_API_ACTIVITY_GET
const activityPostUrl = process.env.REACT_APP_API_ACTIVITY_POST
const activityPutUrl = process.env.REACT_APP_API_ACTIVITY_PUT
const activityDeleteUrl = process.env.REACT_APP_API_ACTIVITY_DELETE

export const getPublicActivity = () => {
  return getPublicHandler(activityGetUrl)
}

export const getActivity = (id) => {
  return getPrivateHandler(activityGetUrl, id)
}

export const postActivity = (id, bodydata) => {
  return postPrivateHandler(activityPostUrl, id, bodydata)
}

export const putActivity = (id, bodydata) => {
  return putPrivateHandler(activityPutUrl, id, bodydata)
}

export const deleteActivity = (id) => {
  return deletePrivateHandler(activityDeleteUrl, id)
}

export const searchActivities = (query) => {
  return getPrivateHandler(`${activityGetUrl}?search=${query}`)
}
