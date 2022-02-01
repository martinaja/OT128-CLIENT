import axios from 'axios'

async function postSlide(body) {
  const baseUrl = process.env.REACT_APP_API_SLIDES_POST
  const request = await axios.post(baseUrl, body)
  const data = request
  return data
}

export default postSlide
