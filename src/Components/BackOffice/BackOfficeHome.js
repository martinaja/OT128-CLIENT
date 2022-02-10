import { Container } from '@mui/material'
import React from 'react'
import BackOfficeContent from './BackOfficeContent'
import BackofficeHeader from './HeaderBackoffice'


const BackOfficeHome = () => {
  return (
    <>
      {BackofficeHeader}
      <Container>
        <BackOfficeContent />
      </Container>
      {/* <Footer /> */}
    </>
  )
}

export default BackOfficeHome
