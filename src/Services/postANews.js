import axios from 'axios';

async function postANews(body) {
  const baseUrl = process.env.REACT_APP_API_NEWS_POST;
  const request = await axios.post(baseUrl, body);
  const data = request;
  return data;
}

export default postANews;
