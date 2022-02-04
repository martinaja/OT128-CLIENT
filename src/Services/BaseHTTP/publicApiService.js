import axios from 'axios'
const apiService = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const getHandler = (apiEndpoint, id) => {  
   const apiServiceUrl = id ? `${apiEndpoint}/${id}` : `${apiEndpoint}`
   return apiService.get(apiServiceUrl).catch((err) => console.log(err)) }