import { getPublicHandler, postHandler } from '../BaseHTTP/publicApiService'

const registerUrl = process.env.REACT_APP_API_REGISTER
const loginUrl = process.env.REACT_APP_API_LOGIN
const roleUrl = process.env.REACT_APP_API_ROLE

export const register = (data) => {
  return postHandler(registerUrl, data)
}

export const login = (data) => { 
  return postHandler(loginUrl, data)
}

export const getRole = (id) => {
  return getPublicHandler(roleUrl, id)
}
