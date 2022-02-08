import { Container } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'
import TableUsers from './TableUsers'

const UsersHome = () => {
  return (
    <div>
      <Container>
        <h3>Usuarios</h3>
        <TableUsers />
      </Container>

      <Footer />
    </div>
  )
}

export default UsersHome
