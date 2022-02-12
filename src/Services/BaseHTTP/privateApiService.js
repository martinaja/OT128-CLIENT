import axios from 'axios'

const token = localStorage.getItem('token')

const apiService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

if (token) {
  apiService.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getPrivateHandler = (apiEndpoint, id) => {
  const apiServiceUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`
  return apiService.get(apiServiceUrl)
}
export const postPrivateHandler = (apiEndpoint, bodyData) => {
  return apiService.post(apiEndpoint, bodyData).catch((err) => {
    console.log(err)
    const error = {
      error: true,
      message: err.message,
    }
    return error
  })
}

// Id obligatory
export const deletePrivateHandler = (apiEndpoint, id) => {
  if (!id) return 'error-no-id'
  const apiServiceUrl = `${apiEndpoint}/${id}`
  return apiService.delete(apiServiceUrl).catch((err) => {
    console.log(err)
    const error = {
      error: true,
      message: err.message,
    }
    return error
  })
}
// Id obligatory
export const putPrivateHandler = (apiEndpoint, id, bodyData) => {
  if (!id) return 'error-no-id'
  const apiServiceUrl = `${apiEndpoint}/${id}`
  return apiService.put(apiServiceUrl, bodyData).catch((err) => {
    console.log(err)
    const error = {
      error: true,
      message: err.message,
    }
    return error
  })
}
// Id obligatory
export const patchPrivateHandler = (apiEndpoint, id, bodyData) => {
  if (!id) return 'error-no-id'
  const apiServiceUrl = `${apiEndpoint}/${id}`
  return apiService.patch(apiServiceUrl, bodyData).catch((err) => {
    console.log(err)
    const error = {
      error: true,
      message: err.message,
    }
    return error
  })
}

// Search for word
export const searchPrivateHandler = (apiEndpoint, search) => {
  const apiServiceUrl = `${apiEndpoint}${search}`
  console.log(apiServiceUrl)
  return apiService.get(apiServiceUrl).catch((err) => {
    console.log(err)
    const error = {
      error: true,
      message: err.message,
    }
    return error
  })
}
