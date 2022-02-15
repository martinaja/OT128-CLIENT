import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    // call a function from services folder to get all the contact data from the ong
  }, [])

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Title image="/images/campaign-recent-02.jpg">Contacto</Title>
      <ContactDetails data={data} />
      <Button variant="contained" sx={{ my: 2 }} onClick={handleClick}>
        Envianos un mensaje!
      </Button>
      <Box sx={{ display: show ? 'block' : 'none' }}>
        <ContactForm />
      </Box>
      <ContactMap />
    </Box>
  )
}

export default ContactHome
