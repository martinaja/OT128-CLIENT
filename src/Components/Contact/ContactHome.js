import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrganizationData } from '../../features/organization/organizationReducer.js'
import { alertServiceError } from '../AlertService.js'
import Spinner from '../Spinner.js'
import { Title } from '../Title.js'
import ContactDetails from './ContactDetails.js'
import { ContactForm } from './ContactForm.js'
import ContactMap from './ContactMap.js'

const ContactHome = () => {
  const data = {
    name: 'placeholder Nombre',
    phone: 'placeholder Telefono',
    cellphone: 'placeholder Celular',
    email: 'placeholder Email',
  }

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
          <Title image="/images/campaign-recent-02.jpg">Contacto</Title>
          <ContactDetails data={data} />

          <hr />

          <Button variant="contained" sx={{ my: 2 }} onClick={handleClick}>
            Envianos un mensaje!
          </Button>
          <Box sx={{ display: show ? 'block' : 'none' }}>
            <ContactForm />
          </Box>

          <hr />
          <Typography variant="h3" gutterBottom component="div" sx={{ mt: 2 }}>
            Visitanos en nuestra sede
          </Typography>
          <Box sx={{ m: 6, boxShadow: 5, border: 1 }}>
            <ContactMap />
          </Box>
        </>
      )}
    </Box>
  )
}

export default ContactHome
