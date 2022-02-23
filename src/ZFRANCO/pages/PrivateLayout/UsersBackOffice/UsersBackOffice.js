import React from 'react'

import { Container } from '@mui/material'

import { TableUsers } from './TableUsers'

export const UsersBackOffice = () => {
  return (
    <Container sx={{ alignItems: 'center', textAlign: 'center' }}>
      <h2>Tabla de Usuarios</h2>
      <TableUsers />
    </Container>
  )
}
