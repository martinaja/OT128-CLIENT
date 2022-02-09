import { Container } from '@mui/material'
import React from 'react'
import BackOfficeContent from './BackOfficeContent'
import BackofficeHeader from './HeaderBackoffice'
import SlidesList from '../Slides/SlidesList'

const BackOfficeHome = () => {
  return (
    <>
      {BackofficeHeader}
      <Container>
        <BackOfficeContent />
       </Container>
     <SlidesList/>
    </>
  )
}

export default BackOfficeHome
