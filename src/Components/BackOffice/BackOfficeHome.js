import { Container } from '@mui/material'
import React from 'react'
import BackOfficeContent from './BackOfficeContent'
import Sidebar from './BackOfficeSidebar'
import BackofficeHeader from './HeaderBackoffice'

const BackOfficeHome = () => {
  return (
    <>
      {BackofficeHeader}
      <Container>
        <BackOfficeContent />
        <Sidebar />
      </Container>
    </>
  )
}

export default BackOfficeHome
