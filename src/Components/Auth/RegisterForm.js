import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Link as RouterLink, Redirect } from 'react-router-dom'
import { FormTextInput as TextInput } from './VisualComponents/Inputs'
import { userRegister } from './../../features/auth/authReducer'
import { useDispatch, useSelector } from 'react-redux'

export default function RegisterForm() {
  const authData = useSelector(({ auth }) => auth)

  if (authData.isAuthenticated) {
    return <Redirect push to="/backoffice" />
  }

  return <FormLogic authData={authData} />
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const FormLogic = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
      }}
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            mailerConsent: false,
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Required'),

            email: Yup.string()
              .email('Invalid email address')
              .required('Required'),
            password: Yup.string()
              .required('Required')
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&.*])(?=.{8,})/,
                'Password must contain at least one upper case character, one lower case character, one number, and must be at least 8 characters long',
              ),
          })}
          onSubmit={(values) => {
            const { name, email, password } = values
            dispatch(userRegister({ name, email, password }))
          }}
        >
          <Form className={classes.form} noValidate>
            <TextInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="name"
              name="name"
              autoComplete="name"
              autoFocus
            />

            <TextInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextInput
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Registrarse
            </Button>
          </Form>
        </Formik>
        <Link component={RouterLink} to="/login">
          {'Ya tiene una cuenta? Ingrese'}
        </Link>
      </div>
    </Container>
  )
}