import axios from "axios";

export async function getActivity(id) {
  const request = await axios.get(
    `${process.env.REACT_APP_API_ACTIVITY_GET}/${id}`
  );
  const data = request?.data;
  return data;
}

export async function postActivity(newActivitie) {
  const request = await axios.post(process.env.REACT_APP_API_ACTIVITY_POST, {
    name: newActivitie.name,
    description: newActivitie.description,
    image: newActivitie.image,
  });
  const data = request;
  return data;
}

export async function putActivity(id, { name, description, image }) {
  const request = await axios.put(
    `${process.env.REACT_APP_API_ACTIVITY_GET}/${id}`,
    {
      name: name,
      description: description,
      image: image,
    }
  );
  const data = request;
  return data;
}