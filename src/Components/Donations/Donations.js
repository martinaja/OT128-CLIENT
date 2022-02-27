import { Container, Typography, Box } from '@mui/material'
import React from 'react'
import { DonationsMp } from './DonationsMp'

const Donations = () => {
  return (
    <>
      <Box
        as="img"
        sx={{ width: '99.1vw'}}
        src="/images/donaciones.png"
        alt="donaciones"
      />
      <Container>
        <DonationsMp />
        <Typography variant="h6" marginBottom={3}>
          ¿POR QUÉ ES TAN IMPORTANTE TU DONATIVO? Tus donativos son la esperanza
          de muchas personas SOMOS MAS se compromete a informar a las personas e
          instituciones que hagan aportaciones finalistas sobre el proyecto o
          actividad apoyada y sus resultados. En SOMOS MAS te animamos a unir
          esfuerzos para mejorar las condiciones de vida de muchos de los
          colectivos desfavorecidos presentes en los países en los que
          trabajamos.
        </Typography>
      </Container>
    </>
  )
}

export default Donations
