import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Spinner = () => {
  return (
    <Box
      sx={{ display: 'flex', position: 'relative', justifyContent: 'center' }}
    >
      <CircularProgress color="inherit" />
    </Box>
  )
}
