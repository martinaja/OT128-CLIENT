import { Container } from '@mui/material'
import React from 'react'
import { Title } from '../Title'
import LastEvent from './LastEvent'
import NewsList from './NewsList'

const PublicNewHome = () => {
  return (
    <Container sx={{ alignContent: 'center', textAlign: 'center' }}>
      <Title>Sección de Noticias</Title>
      <LastEvent />
      <NewsList />
    </Container>
  )
}

export default PublicNewHome
