import axios from 'axios';

async function getActivity() {
  const request = await axios.get(process.env.REACT_APP_API_ACTIVITY_GET);
  const data = request?.data;
  return data;
}

export default getActivity;
