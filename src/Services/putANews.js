import axios from 'axios';

async function putANews(id, body) {
  const baseUrl = process.env.REACT_APP_API_NEWS_PUT;
  const request = await axios.put(`${baseUrl}/${id}`, body);
  const data = request;
  return data;
}

export default putANews;
