import axios from 'axios'

async function putSlide(id, body) {
  const baseUrl = process.env.REACT_APP_API_SLIDES_UPDATE
  const request = await axios.put(`${baseUrl}/${id}`, body)
  const data = request
  return data
}

export default putSlide
