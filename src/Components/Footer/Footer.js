import React from 'react'
import {
  useMediaQuery,
  createTheme,
  AppBar,
  Box,
  Toolbar,
} from '@material-ui/core'
import { Button, Container } from '@mui/material'
import { FooterSuscribe } from '../FooterSuscribe'


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
      
        position="relative"
        style={{
          background: isMatchDesktop ? 'rgba(7,34,39,0.7)' : 'rgb(7,34,39)',
          marginBottom: '0rem',
          marginTop: '10rem'
        }}
      >
        <Toolbar >
          {isMatchTablet && (
            <Box marginLeft="10rem" sx={{ flexGrow: 1 }}>
              <Container>
              <Button color="inherit">Notocias</Button>
                <Button color="inherit">Actividades</Button>
                <Button color="inherit">Novedades</Button>
              </Container>
            </Box>
          )}
          {isMatchLaptop && (
            <Box
              component="img"
              sx={{
                
                width: 120,
                height: 62,
                m: 8,
                p: 0,
               position: 'static',
              }}
              alt="Logo Somos Mas ong."
              src="/images/Logo Somos Mas.png"
            />
          )}
          {isMatchTablet && (
            <Box marginRight="8rem" >
              <Container color="warning">
                <Button color="inherit">Testimonios</Button>
                <Button color="inherit">Nosotros</Button>
                <Button color="inherit">Contacto</Button>
              </Container>
            </Box>
          )}

          <Box />
          <Box sx={{ flexGrow: 1 }}>
          <FooterSuscribe />
          </Box>
        
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Footer
