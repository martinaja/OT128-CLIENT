import { Container } from '@mui/material'
import React from 'react'
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
      <LastEvent />
      <Container sx={{ alignContent: 'center', textAlign: 'center' }}>
        <NewsSearch />
        <NewsList />
      </Container>
    </>
  )
}

export default PublicNewHome
