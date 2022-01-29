import axios from 'axios';

const apiUrlGetTestimonials = process.env.REACT_APP_API_TESTIMONY_GET;
const apiUrlPutTestimonials = process.env.REACT_APP_API_TESTIMONY_PUT;
const apiUrlPostTestimonials =
	process.env.REACT_APP_API_TESTIMONY_POST;

const compareTestimonialExist = async formDataName => {
	try {
		const response = await axios.get(apiUrlGetTestimonials);
		const dataApi = response.data.data;
		const testimonialExists = dataApi.find(
			testimony => testimony.name === formDataName
		);
		return testimonialExists ? testimonialExists.id : false;
	} catch (err) {
		console.log(err);
	}
};

const putTestimony = async (id, formData) => {
	try {
		const responseServer = await axios.put(
			`${apiUrlPutTestimonials}/${id}`,
			formData
		);
		return responseServer ? responseServer : false;
	} catch (err) {
		console.log(err);
	}
};

const postTestimony = async formData => {
	try {
		const responseServer = await axios.post(
			apiUrlPostTestimonials,
			formData
		);
		return responseServer ? responseServer : false;
	} catch (err) {
		console.log(err);
	}
};

export { compareTestimonialExist, putTestimony, postTestimony };
