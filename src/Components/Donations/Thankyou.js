import {  Box, Container } from '@mui/material'
import React from 'react'
import './/ThankYou.css'

const Thankyou = () => {
  return (
    <>
      <Box
        // sx={{
        //     pl: { xl: '15%', md: '15%', xs: '20%' },
        //     pt: { md: '10%', xs: '15%' },
        //   }}
        style={{
          backgroundImage: `url("images/verdolaga.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding:"50px 30px"
        }}
      >
        <h3 className="tenkiuH3">
          {' '}
          <span className="tenkiu">GRACIAS</span> <span className="tenkiu">POR</span> <span className="tenkiu">SU</span>
          <span className="tenkiu">AYUDA</span>
        </h3>
      </Box>
    </>
  )
}

export default Thankyou
