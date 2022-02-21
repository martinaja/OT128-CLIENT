import React from 'react'

import { Container } from '@mui/material'

import { Title } from '../../../components/Title/Title'
import { LastEvent } from './LastEvent/LastEvent'
import { NewsList } from './NewsList/NewsList'
import { NewsSearch } from './NewsSearch/NewsSearch'

export const NewsPublic = () => {
  return (
    <Container sx={{ alignContent: 'center', textAlign: 'center' }}>
      <Title>Sección de Novedades</Title>
      <LastEvent />
      <NewsSearch />
      <NewsList />
    </Container>
  )
}
