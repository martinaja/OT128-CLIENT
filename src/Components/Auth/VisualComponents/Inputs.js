import React from 'react';
import { useField } from 'formik';
import TextField from '@material-ui/core/TextField';


const FormTextInput = props => {
  const [field, meta] = useField(props);
  return (
    <TextField {...props} inputProps = {{...field}} error = {meta.touched && typeof meta.error !== 'undefined'} helperText = {meta.touched && meta.error} />
  );
};



export { FormTextInput };