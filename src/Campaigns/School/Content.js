import { Box, Container, createTheme, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Countdown, { zeroPad } from 'react-countdown'

const Content = () => {
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

  const renderer = ({ days, hours, minutes, seconds }) => (
    <span>
      Faltan {days} días, {hours} horas, {minutes} minutos, {seconds} segundos.
    </span>
  )

  const date = new Date('2022-03-02T00:00:00.000000Z') /*Date from API*/
  const dateToUTM = date.toUTCString()

  return (
    <Container
      style={{
        background: isMatchDesktop ? 'rgba(7,34,39,0.7)' : 'rgb(7,34,39)',
      }}
    >
      <Box>
        <main>
          <p>Descripción</p>
          <p>Fecha</p>
          <p>Hora</p>
          <p>Lugar</p>
        </main>
      </Box>
      {isMatchLaptop && (
        <Box>
          {/* Hide on mobile & tablet */}
          <section id="gallery">
            <p>Imágenes</p>
          </section>
        </Box>
      )}
      {isMatchTablet && (
        <Box>
          {/* Hide on mobile */}
          <section id="countdown">
            <Countdown date={dateToUTM + '-0300'} renderer={renderer} />
          </section>
        </Box>
      )}
    </Container>
  )
}

export default Content
