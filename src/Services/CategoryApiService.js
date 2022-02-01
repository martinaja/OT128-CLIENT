import axios from "axios";

export async function getCategory(id) {
  const request = await axios.get(
    `${process.env.REACT_APP_API_CATEGORIES_GET}/${id}`
  );
  const data = request?.data;
  return data;
}

export async function postCategory(newCategory) {
  const request = await axios.post(process.env.REACT_APP_API_CATEGORIES_POST, {
    name: newCategory.name,
    description: newCategory.description,
    image: newCategory.image,
  });
  const data = request;
  return data;
}

export async function putCategory(id, { name, description, image }) {
  const request = await axios.put(
    `${process.env.REACT_APP_API_CATEGORIES_GET}/${id}`,
    {
      name: name,
      description: description,
      image: image,
    }
  );
  const data = request;
  return data;
}
