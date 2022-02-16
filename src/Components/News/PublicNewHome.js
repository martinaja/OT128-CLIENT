import { Container } from '@mui/material'
import React from 'react'
import { Title } from '../Title'
import LastEvent from './LastEvent'
import NewsList from './NewsList'
import NewsSearch from './NewsSearch'

const PublicNewHome = () => {
  return (
    <Container sx={{ alignContent: 'center', textAlign: 'center' }}>
      <Title>Sección de Noticias</Title>
      <LastEvent />
      <NewsSearch />
      <NewsList />
    </Container>
  )
}

export default PublicNewHome
