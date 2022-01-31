import axios from 'axios';

async function getANews(id) {
  const baseUrl = process.env.REACT_APP_API_NEWS_GET;
  const request = await axios.get(`${baseUrl}/${id}`);
  const data = request?.data;
  return data;
}

export default getANews;
