import React from 'react'
import {
  useMediaQuery,
  createTheme,
  AppBar,
  Box,
  Toolbar,
<<<<<<< HEAD
  Button,
} from '@material-ui/core'
import { FooterSuscribe } from './../FooterSuscribe'
=======
} from '@material-ui/core'
import { Button, Container } from '@mui/material'
import { FooterSuscribe } from './../Footer'
>>>>>>> 6213f0a81d13fdf613faae17603e1b70a4b82f08

const Footer = () => {
  // Breakpoints
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  })

<<<<<<< HEAD
  // const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  // const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  return (
    <Box sx={{ flexGrow: 1, boxShadow: 0 }}>
      <AppBar
        position="static"
        style={{
          background: isMatchDesktop ? 'rgba(7,34,39,0.7)' : 'rgb(7,34,39)',
        }}
      >
        <Box
          component="img"
          sx={{
            width: 128,
            height: 73,
            ml: '3rem',
            p: 1,
          }}
          alt="Logo ong."
          src="/images/Logo Somos Mas.png"
        />
        <Box marginLeft="10rem" sx={{ flexGrow: 1 }}>
          <Button color="inherit">Notocias</Button>
          <Button color="inherit">Actividades</Button>
          <Button color="inherit">Novedades</Button>
        </Box>
        <Toolbar>
          <Box marginLeft="10rem" sx={{ flexGrow: 1 }}>
            <Button color="inherit">Testimonios</Button>
            <Button color="inherit">Nosotros</Button>
            <Button color="inherit">Contacto</Button>
          </Box>
          <FooterSuscribe />
=======
  const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  // if you want to add more social medias, add it to here and /data/socialMedia.js.
  // and import the Material Icon, then add the code.

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        style={{
          background: isMatchDesktop ? 'rgba(7,34,39,0.7)' : 'rgb(7,34,39)',
          marginBottom: '0px !important',
        }}
      >
        <Toolbar>
          {isMatchTablet && (
            <Box marginLeft="10rem">
              <Container>
                <Button color="warning">Noticias</Button>
                <Button color="warning">Actividades</Button>
                <Button color="warning">Novedades</Button>
              </Container>
            </Box>
          )}
          {isMatchLaptop && (
            <Box
              component="img"
              sx={{
                width: 128,
                height: 72,
                m: 8,
                p: 0,
               position: 'static',
              }}
              alt="Logo Somos Mas ong."
              src="/images/Logo Somos Mas.png"
            />
          )}
          {isMatchTablet && (
            <Box marginRight="10rem">
              <Container color="warning">
                <Button color="warning">Testimonios</Button>
                <Button color="warning">Nosotros</Button>
                <Button color="warning">contacto</Button>
              </Container>
            </Box>
          )}

          <Box />
          <FooterSuscribe/>
>>>>>>> 6213f0a81d13fdf613faae17603e1b70a4b82f08
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Footer
