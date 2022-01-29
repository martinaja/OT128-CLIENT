import axios from 'axios';

async function getCategories() {
  const request = await axios.get(process.env.REACT_APP_API_CATEGORIES_GET);
  const data = request?.data;
  return data;
}

export default getCategories;
