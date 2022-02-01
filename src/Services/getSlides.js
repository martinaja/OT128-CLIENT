import axios from 'axios'

async function getSlides() {
  const request = await axios.get(process.env.REACT_APP_API_SLIDES_GET)
  const data = request?.data
  return data
}

export default getSlides
