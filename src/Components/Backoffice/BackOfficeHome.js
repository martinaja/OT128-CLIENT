import { Container } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import BackOfficeContent from './BackOfficeContent'

const BackOfficeHome = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        <BackOfficeContent />
      </Container>
      <Footer />
    </>
  )
}

export default BackOfficeHome
