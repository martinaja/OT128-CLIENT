import React from 'react'

import defaultImage from '../../assets/defaultImage.jpg'

import { Box } from '@mui/material'

export const Title = ({ children, image }) => {
  return (
    <>
      <h1>{children}</h1>
      <Box sx={{ mt: 4 }}>
        <img width="100%" src={image || defaultImage} alt={children} />
      </Box>
    </>
  )
}
