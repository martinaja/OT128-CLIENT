import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link as RouterLink, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from './../../features/auth/authReducer'

export default function LoginForm() {
  const authData = useSelector(({ auth }) => auth)

  if (authData.isAuthenticated) {
    return <Redirect to="/" />
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const FormLogic = ({ authData }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <>
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
            Ingresar
          </Typography>
          <Formik
            initialValues={{
              email: '',
              password: '',
              rememberUser: false,
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
              password: Yup.string().required('No password provided.'),
            })}
            onSubmit={(values) => {
              const { email, password } = values
              const data = { email: email, password: password }
              dispatch(userLogin(data))
            }}
          >
            <Form>
              <Field name="email">
                {({ field, form, meta }) => (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    inputProps={{ ...field }}
                    error={meta.touched && typeof meta.error !== 'undefined'}
                  />
                )}
              </Field>
              <Field name="password" type="password">
                {({ field, form, meta }) => (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    inputProps={{ ...field }}
                    error={meta.touched && typeof meta.error !== 'undefined'}
                  />
                )}
              </Field>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Ingresar
              </Button>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/register">
                    {'No tiene una cuenta? Registrese'}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      </Container>
    </>
  )
}
