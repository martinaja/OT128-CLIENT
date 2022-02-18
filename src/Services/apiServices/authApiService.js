import { postHandler } from '../BaseHTTP/publicApiService'

const registerUrl = process.env.REACT_APP_API_REGISTER
const loginUrl = process.env.REACT_APP_API_LOGIN

export const register = (data) => {
  return postHandler(registerUrl, data)
}

export const login = (data) => {
  return postHandler(loginUrl, data)
}
