import { Container } from '@mui/material'
import React from 'react'
import { Title } from '../Title'
import LastEvent from './LastEvent'
import NewsList from './NewsList'
import NewsSearch from './NewsSearch'

const PublicNewHome = () => {
  return (
    <>
      <img
        width="100%"
        src="/images/Lee todas las novedades!.png"
        alt="imagen novedades bienvenida"
      />

      <Container sx={{ alignContent: 'center', textAlign: 'center' }}>
        <LastEvent />
        <NewsSearch />
        <NewsList />
      </Container>
    </>
  )
}

export default PublicNewHome
