import React from 'react';

import {
Button,
CssBaseline,
TextField,
FormControlLabel,
Checkbox,

Grid,
Box, Typography, Container  } from '@material-ui/core';

import {  Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import * as yup from 'yup';

import { useFormik } from 'formik';


const useStyles = makeStyles((theme) => ({
paper: {
marginTop: theme.spacing(8),
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
avatar: {
margin: theme.spacing(1),
backgroundColor: theme.palette.secondary.main,
},
form: {
width: '100%', // Fix IE 11 issue.
marginTop: theme.spacing(1),
},
submit: {
margin: theme.spacing(3, 0, 2),
},
}));

const loginShema = yup.object({
            email: yup.string()
              .required('Your email please.')
              .email('Enter a valid email.'),
          password: yup.string()
                 .required('Your password please.')
                  .min(8, 'Your password is at least 6 characters long.')

})



function LoginForm() {
const classes = useStyles();
const formik = useFormik({
initialValues:{
  email:'',
  password:''
},
validationSchema: loginShema,
onSubmit: (values) => {
 alert(JSON.stringify(values, null, 2))
 },

})
return (
 <body className="circuit-background">
  <Container component="main" maxWidth="xs" >
   <CssBaseline />
   <div className={classes.paper}>

   <Typography component="h1" variant="h5">
    Sign in
   </Typography>
  <form className={classes.form} noValidate>
    <TextField
      variant="filled"
      margin="normal"
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      onChange={formik.handleChange}
      value={formik.values.email}
      error={formik.touched.email && Boolean(formik.errors.email)}
      helperText={formik.touched.email && formik.errors.email}

    />
    <TextField
      variant="filled"
      margin="normal"
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      onChange={formik.handleChange}
      value={formik.values.password}
      error={formik.touched.password && Boolean(formik.errors.password)}
      helperText={formik.touched.password && formik.errors.password}


    />
    <FormControlLabel
      control={<Checkbox value="remember" required color="primary" />}
      label="Remember me"
    />
    <Button
      type="submit"
      fullWidth
      variant="outlined"
      color="primary"
      className={classes.submit}
    >
      Sign In
    </Button>
    <Grid container>
      <Grid item xs>
        <Link >
          Forgot password?
        </Link>
       </Grid>
       <Grid item>
         <Link to="/SignUp">
           Don't have an account? Sign Up
         </Link>
       </Grid>
     </Grid>
   </form>
 </div>
 <Box mt={8}>
</Box>
 </Container>
</body>
)
}

export default LoginForm;