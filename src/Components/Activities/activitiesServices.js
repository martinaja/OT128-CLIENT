import axios from 'axios';

const apiUrlGet = process.env.REACT_APP_API_ACTIVITY_GET;
const apiUrlPost = process.env.REACT_APP_API_ACTIVITY_POST;
const apiUrlPut = process.env.REACT_APP_API_ACTIVITY_PUT;

let id = undefined;
let data = undefined;
let error = undefined;

const compareActivitieExist = async formDataName => {
	try {
		const response = await axios.get(apiUrlGet);
		const dataApi = response.data.data;

		if (response) {
			id = dataApi.find(value => value.name === formDataName).id;
		}
	} catch (err) {
		if (err) error = 'Error, could not complete the action';
	}
	return id;
};

const putActivitie = async (id, formData) => {
	try {
		const responseServer = await axios.put(`${apiUrlPut}/${id}`, {
			...formData,
			id
		});
		if (responseServer) {
			data = responseServer;
		}
	} catch (err) {
		if (err) error = 'Error, could not complete the action';
	} finally {
		return [data, error];
	}
};

const postActivitie = async formData => {
	try {
		const responseServer = await axios.post(apiUrlPost, formData);
		if (responseServer) {
			data = responseServer;
		}
	} catch (err) {
		if (err) error = 'Error, could not complete the action';
	} finally {
		return [data, error];
	}
};

export { compareActivitieExist, putActivitie, postActivitie };
