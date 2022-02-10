import { Box, Typography } from '@mui/material';
import React from 'react';
import {Helmet} from "react-helmet";

export const DonationsMp = ({ text = 'Esto es un texto de prueba' }) => {

    


  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 500 }}>
        <Typography variant="h4" component="div" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>

               
              


          
       

    



      </Box>
    </>
  )
}
