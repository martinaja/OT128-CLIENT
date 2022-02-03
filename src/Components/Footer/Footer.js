import React from 'react'
import {
  useMediaQuery,
  createTheme,
  AppBar,
  Box,
  Toolbar,
  Button,
} from '@material-ui/core'
import { FooterSuscribe } from './../FooterSuscribe'

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
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Footer
