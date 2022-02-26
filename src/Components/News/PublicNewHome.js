import { Box, Container } from '@mui/material'
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

        <Box
          sx={{
            backgroundColor: '#4fbdba',
            backgroundImage:
              ' url(https://www.transparenttextures.com/patterns/pyramid.png)',
            boxShadow: 3,
            borderRadius: 2,
            pt: 3,
            px: 1,
          }}
        >
          <NewsList from={'newsHome'} />
        </Box>
      </Container>
    </>
  )
}

export default PublicNewHome
