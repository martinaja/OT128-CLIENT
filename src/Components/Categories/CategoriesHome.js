import { Container } from '@mui/material'
import React from 'react'
import Sidebar from '../BackOffice/BackOfficeSidebar'
import CategoriesList from './CategoriesList'

const CategoriesHome = () => {
  return (
    <Container sx={{ alignItems: 'center', textAlign: 'center' }}>
      <Sidebar />
      <h2>Lista de Categorías</h2>
      <CategoriesList />
    </Container>
  )
}

export default CategoriesHome
