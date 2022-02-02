import React from 'react'
import {
  useMediaQuery,
  createTheme,
  AppBar,
  Box,
  Toolbar,
} from '@material-ui/core'
import { Button, Container } from '@mui/material'
import { FooterSuscribe } from './../Footer'

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
          marginBottom: '0rem',
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
              alt="Logo ong."
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
          <FooterSuscribe/>
          <Box />
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Footer
