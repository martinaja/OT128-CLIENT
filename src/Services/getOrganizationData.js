import axios from 'axios'

async function getOrganization() {
  const request = await axios.get(process.env.REACT_APP_API_ORGANIZATION_GET)
  const data = request?.data
  return data
}

export default getOrganization
