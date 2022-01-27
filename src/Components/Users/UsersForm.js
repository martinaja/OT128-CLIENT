import { useFormik } from 'formik';

import '../FormStyles.css';

const UserForm = () => {

    const validate = ( {name, email, role, description, photo} ) => {

        const errors = {};

        if (!name){
            errors.name = 'Name is required';
        } else if ( name.length < 4) {
            errors.name = 'Must be at least 4 characters';
        }

        if (!email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Invalid email address';
        }

        if ( photo.length >= 1 ) {
            if ( !(/(.jpg|.jpeg|.png)$/i.test(photo)) ) {  
              errors.photo = 'Must be .jpg .jpeg .png';
            }
        }

          if (!role){
            errors.role = 'Role is required';
        }
    
        if (!description){
            errors.description = 'Description is required';
        } else if ( description.length < 10) {
            errors.description = 'Must be at least 10 characters';
        }

        return errors;
    }
    
    const { handleChange, values, handleSubmit, errors } = useFormik({
        initialValues: {
            name: '',
            email: '',
            role: '',
            description: '',
            photo: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    });

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <input className="input-field" type="text" name="name" value={values.name || ''} onChange={handleChange} placeholder="Name"></input>
            { errors.name && <span>{ errors.name }</span> }
            <input className="input-field" type="text" name="email" value={values.email || ''} onChange={handleChange} placeholder="Email"></input>
            { errors.email && <span>{ errors.email }</span> }
            <select className="input-field" name="role" value={values.role || ''} onChange={handleChange}>
                <option value="" disabled >Select the role</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
            </select>
            { errors.role && <span>{ errors.role }</span> }
            <label htmlFor="avatar">Choose a profile photo:</label>
            <input type="file" name="photo"  onChange={handleChange}/>
            { errors.photo && <span>{ errors.photo }</span> }
            <input className="input-field" type="text" name="description" value={values.description || ''} onChange={handleChange} placeholder="Description"></input>
            { errors.description && <span>{ errors.description }</span> }
            <button className="submit-btn" type="submit">Send</button>
        </form>
    );
}
 
export default UserForm;