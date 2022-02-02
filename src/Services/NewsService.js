import {
  putRequest,
  deleteRequest,
  postRequest,
  getRequest,
} from "./privateApiService";

import {Get} from "./publicApiService"

const baseUrl = "http://ongapi.alkemy.org/api/news";

const getNews = () => {
  const response = Get(`${baseUrl}`);
  return response;
};

const createNews = (news) => {
  const response = postRequest(`${baseUrl}`, news);
  return response;
};

const getNewsById = (id) => {
  const response = getRequest(`${baseUrl}/${id}`);
  return response;
};

const updateNews = (id, news) => {
  const response = putRequest(`${baseUrl}`, id, news);
  return response;
};

const deleteNews = (id) => {
  const response = deleteRequest(`${baseUrl}`, id);
  return response;
};

const NewsService = {
  delete: deleteNews,
  getDetail: getNewsById,
  getAll: getNews,
  create: createNews,
  update: updateNews,
};

export default NewsService;