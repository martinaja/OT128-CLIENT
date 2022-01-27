import '../FormStyles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ActivitiesForm = () => {
	const ALLOWED_FORMATS = ['image/jpeg', 'image/png', 'image/jpg'];

	const formik = useFormik({
		initialValues: {
			name: '',
			description: '',
			image: undefined
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Required'),
			description: Yup.string().required('Required'),
			image: Yup.mixed()
				.test(
					'fileType',
					'File must be an image jpg or png',
					value => {
						if (value)
							return ALLOWED_FORMATS.includes(value && value.type);
					}
				)
				.required('Required')
		}),
		onSubmit: formData => {
			console.log(formData);
		}
	});

	return (
		<form className="form-container" onSubmit={formik.handleSubmit}>
			<input
				className="input-field"
				type="text"
				name="name"
				value={formik.values.name}
				onChange={formik.handleChange}
				placeholder="Activity Title"
				error={formik.errors.name}
			/>
			{formik.errors.name}
			<input
				className="input-field"
				type="text"
				name="description"
				value={formik.values.description}
				onChange={formik.handleChange}
				placeholder="Write some activity description"
				error={formik.errors.description}
			/>
			{formik.errors.description}
			<label htmlFor="image">Upload Image:</label>
			<input
				type="file"
				name="image"
				onChange={e => {
					formik.setFieldValue('image', e.target.files[0]);
				}}
				error={formik.errors.image}
			/>
			{formik.errors.image}
			<button className="submit-btn" type="submit">
				Send
			</button>
		</form>
	);
};

export default ActivitiesForm;
