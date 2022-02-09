import { Container } from '@mui/material'
import React from 'react'
import BackOfficeContent from './BackOfficeContent'
import BackofficeHeader from './HeaderBackoffice'
import SlidesList from './SlidesList';

const BackOfficeHome = () => {
  return (
    <>
      {BackofficeHeader}
      <Container>
        <BackOfficeContent />
        <SlidesList/>
      </Container>
     
    </>
  )
}

export default BackOfficeHome
