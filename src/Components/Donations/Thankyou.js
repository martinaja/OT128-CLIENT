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
          backgroundImage: `url("images/tenkiu.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding:"50px 30px",
          textAlign:"center",
        
        }}
      >
        <h3 className="tenkiuH3">
          {' '}
          <span  className="animate__animated animate__backInDown">GRACIAS</span> <span className="animate__animated animate__backInDown">POR</span> <span className="animate__animated animate__backInDown">SU</span>
          <span className="animate__animated animate__backInDown">AYUDA</span>
        </h3>
      </Box>
    </>
  )
}

export default Thankyou
