import { Box, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player/lazy'

// Lazy load the YouTube player

const LastEvent = () => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        my: 6,
        pb: 2,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        boxShadow: 3,
      }}
    >
      <Typography variant="h3" component="div" gutterBottom>
        {' '}
        Nuestro evento pasado!
      </Typography>
      <ReactPlayer
        width="320px"
        height="180px"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
      />
    </Box>
  )
}

export default LastEvent
