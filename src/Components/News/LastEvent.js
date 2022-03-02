import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player/lazy'

const LastEvent = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        mb: 4,
        pb: 2,
        backgroundColor: '#4fbdba',
        backgroundImage:
          ' url(https://www.transparenttextures.com/patterns/pyramid.png)',
        boxShadow: 3,
        textAlign: 'center',
      }}
    >
      {' '}
      <Container>
        <Grid container spacing={2} sx={{ px: 2, py: 4, minHeight: '400px ' }}>
          <Grid item xs={12} sm={6}>
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
              url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ py: 2 }}>
              <Typography variant="h4" component="div" gutterBottom>
                Mira nuestro ultimo evento!
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default LastEvent
