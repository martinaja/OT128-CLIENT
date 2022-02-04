import axios from 'axios'

const token = JSON.parse(localStorage.getItem('onLoggedUser'))

const apiService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

if (token !== '')
  apiService.defaults.headers.common['Authorization'] = `Bearer ${token}` //token

export const getHandler = (apiEndpoint, id) => {
  const apiServiceUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`

  return apiService.get(apiServiceUrl).catch((err) => console.log(err))
}

export const postHandler = (apiEndpoint, bodyData) => {
  return apiService.post(apiEndpoint, bodyData).catch((err) => console.log(err))
}

// Id obligatory
export const deleteHandler = (apiEndpoint, id) => {
  if (!id) return 'error-no-id'
  const apiServiceUrl = `${apiEndpoint}/${id}`

  return apiService.post(apiServiceUrl).catch((err) => console.log(err))
}

// Id obligatory
export const putHandler = (apiEndpoint, id, bodyData) => {
  if (!id) return 'error-no-id'
  const apiServiceUrl = `${apiEndpoint}/${id}`

  return apiService
    .post(apiServiceUrl, bodyData)
    .catch((err) => console.log(err))
}

// Id obligatory
export const patchHandler = (apiEndpoint, id, bodyData) => {
  if (!id) return 'error-no-id'
  const apiServiceUrl = `${apiEndpoint}/${id}`

  return apiService
    .post(apiServiceUrl, bodyData)
    .catch((err) => console.log(err))
}

export const getCategories = (id) => {
  return getHandler('http://ongapi.alkemy.org/api/categories', id)
}
