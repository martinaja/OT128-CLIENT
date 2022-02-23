import { Box, Button, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getOrganizationData } from '../../features/organization/organizationReducer.js'
import { alertServiceError } from '../AlertService.js'
import Spinner from '../Spinner.js'
import ContactDetails from './ContactDetails.js'
import { ContactForm } from './ContactForm.js'
import ContactMap from './ContactMap.js'

const ContactHome = () => {
  // Function that show form if the button gets clicked
  const [show, setShow] = useState(false)

  const handleClick = () => {
    if (show) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  const dispatch = useDispatch()
  const state = useSelector((state) => state.organization)

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch(getOrganizationData())
    }

    if (state.status === 'error') {
      alertServiceError(
        state.errorMsg,
        'Se produjo un error al intentar obtener datos de la organización',
      )
    }
  }, [state.status, dispatch, state.errorMsg])

  const { role } = useSelector((state) => state.auth)
  if (role === 'Admin') return <Redirect to="/" />

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      {state.loader ? (
        <Spinner />
      ) : (
        <>
          <img width="100%" src="/images/imagen contacto.png" />

          <Container>
            <ContactDetails />

            <hr />
            <Button variant="contained" sx={{ my: 2 }} onClick={handleClick}>
              Envianos un mensaje!
            </Button>
            <Box sx={{ display: show ? 'block' : 'none' }}>
              <ContactForm />
            </Box>

            <hr />
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ mt: 2 }}
            >
              Visitanos en nuestra sede
            </Typography>
            <Box sx={{ m: 6, boxShadow: 5, border: 1 }}>
              <ContactMap />
            </Box>
          </Container>
        </>
      )}
    </Box>
  )
}

export default ContactHome
