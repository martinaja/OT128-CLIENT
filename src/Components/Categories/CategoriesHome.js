import { Container } from '@mui/material'
import React from 'react'
import CategoriesList from './CategoriesList'
import InputSearchCategories from './SearchCategories'

const CategoriesHome = () => {
  return (
    <Container sx={{ alignItems: 'center', textAlign: 'center', mt: 2 }}>
      <h2>Lista de Categorías</h2>
      <InputSearchCategories />

      <CategoriesList />
    </Container>
  )
}

export default CategoriesHome
