import { Container } from '@mui/material'
import React from 'react'
import InputSearchUsers from './InputSearchUser'
import TableUsers from './TableUsers'

const UsersHome = () => {
  return (
    <Container sx={{ alignItems: 'center', textAlign: 'center' }}>
      <h2>Tabla de Usuarios</h2>
      <TableUsers />
    </Container>
  )
}

export default UsersHome
