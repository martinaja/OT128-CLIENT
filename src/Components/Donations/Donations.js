import { Box } from '@material-ui/core'
import React from 'react'
import { DonationsMp } from './DonationsMp'

export const Donations = () => {
  return (
    <>
      <DonationsMp />
      <Box sx={{ p: '1rem', maxWidth: '40em', marginTop: '35px' }}>
        <h3  class="animate__animated animate__backInLeft" style={{fontWeight: '300'}}>
          ¿POR QUÉ ES TAN IMPORTANTE TU DONATIVO? Tus donativos son la esperanza
          de muchas personas SOMOS MAS se compromete a informar a las personas e
          instituciones que hagan aportaciones finalistas sobre el proyecto o
          actividad apoyada y sus resultados. En SOMOS MAS te animamos a unir
          esfuerzos para mejorar las condiciones de vida de muchos de los
          colectivos desfavorecidos presentes en los países en los que
          trabajamos.
        </h3>
      </Box>
    </>
  )
}
