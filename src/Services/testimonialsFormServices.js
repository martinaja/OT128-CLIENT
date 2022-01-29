import axios from 'axios';

const apiUrlGetTestimonials = process.env.REACT_APP_API_TESTIMONY_GET;
const apiUrlPutTestimonials = process.env.REACT_APP_API_TESTIMONY_PUT;
const apiUrlPostTestimonials =
	process.env.REACT_APP_API_TESTIMONY_POST;

const testimonialsExist = async formTestimonialsName => {
	try {
		const response = await axios.get(apiUrlGetTestimonials);
		const testimonials = response.data.data;
		const testimonialExists = testimonials.find(
			testimony => testimony.name === formTestimonialsName
		);
		return testimonialExists ? testimonialExists.id : false;
	} catch (error) {
		console.log(error);
	}
};

export { testimonialsExist };
