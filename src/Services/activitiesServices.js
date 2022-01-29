import axios from 'axios';

const apiUrlGet = process.env.REACT_APP_API_ACTIVITY_GET;
const apiUrlPost = process.env.REACT_APP_API_ACTIVITY_POST;
const apiUrlPut = process.env.REACT_APP_API_ACTIVITY_PUT;

const compareActivitieExist = async formDataName => {
	try {
		const response = await axios.get(apiUrlGet);
		const dataApi = response.data.data;
		const activitieExists = dataApi.find(
			activitie => activitie.name === formDataName
		);
		return activitieExists ? activitieExists.id : false;
	} catch (err) {
		console.log(err);
	}
};

const putActivitie = async (id, formData) => {
	try {
		const responseServer = await axios.put(`${apiUrlPut}/${id}`, {
			...formData,
			id
		});
		return responseServer ? responseServer : false;
	} catch (err) {
		console.log(err);
	}
};

const postActivitie = async formData => {
	try {
		const responseServer = await axios.post(apiUrlPost, formData);
		return responseServer ? responseServer : false;
	} catch (err) {
		console.log(err);
	}
};

export { compareActivitieExist, putActivitie, postActivitie };
