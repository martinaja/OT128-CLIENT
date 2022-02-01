import axios from 'axios'

async function getSlide(id) {
  const request = await axios.get(
    `${process.env.REACT_APP_API_SLIDES_GET}/${id}`,
  )
  const data = request?.data
  return data
}

export default getSlide
