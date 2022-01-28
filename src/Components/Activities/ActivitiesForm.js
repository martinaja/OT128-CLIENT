import '../FormStyles.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
	compareActivitieExist,
	putActivitie,
	postActivitie
} from './activitiesServices';

const ActivitiesForm = () => {
	const ALLOWED_IMAGE_FORMATS = [
		'image/jpeg',
		'image/png',
		'image/jpg'
	];

	const convertBase64 = async file => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);

			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = error => {
				reject(error);
			};
		});
	};

	const formik = useFormik({
		initialValues: {
			name: '',
			description: '',
			image: undefined
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Required'),
			description: Yup.string(),
			image: Yup.mixed()
				.test(
					'fileType',
					'File must be an image jpg or png',
					value => {
						if (value)
							return ALLOWED_IMAGE_FORMATS.includes(
								value && value.type
							);
					}
				)
				.required('Required')
		}),
		onSubmit: async formData => {
			const imageBase64 = await convertBase64(formData.image);
			const id = await compareActivitieExist(formData.name);
			if (id) {
				const [data, errorPut] = await putActivitie(id, {
					...formData,
					image: imageBase64
				});
				data ? console.log(data) : console.log(errorPut);
			} else {
				const [data, errorPost] = await postActivitie({
					...formData,
					image: imageBase64
				});
				data ? console.log(data) : console.log(errorPost);
			}
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
			<CKEditor
				editor={ClassicEditor}
				data={formik.values.description}
				onChange={(event, editor) => {
					const data = editor.getData();
					formik.setFieldValue('description', data);
				}}
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
