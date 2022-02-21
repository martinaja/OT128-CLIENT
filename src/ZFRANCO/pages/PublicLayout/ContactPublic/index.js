import React, { useEffect, useState } from 'react'

import { Box, Button, Typography } from '@mui/material'

import { alertServiceError } from '../../../services/AlertService/AlertService'
import { Spinner } from '../../../components/Spinner/Spinner'
import { Title } from '../../../components/Title/Title'

import { ContactDetails } from './ContactDetails/ContactDetails'
import { ContactForm } from './ContactForm/ContactForm'
import { ContactMap } from './ContactMap/ContactMap'

import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { getOrganizationData } from '../../../redux/reducers/organizationReducer/organizationReducer'

export const ContactPublic = () => {
  let navigate = useNavigate()

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

  const { role } = useSelector((state) => state.auth)
  if (role === 'Admin') return navigate('/')

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
