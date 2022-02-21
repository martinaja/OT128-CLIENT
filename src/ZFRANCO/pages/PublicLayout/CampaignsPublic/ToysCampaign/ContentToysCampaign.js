import React from 'react'

import { Box, createTheme, Grid, Paper, useMediaQuery } from '@material-ui/core'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'

import { Timer } from '../../../../components/Countdown/Timer'

import styles from './ContentToysCampaign.module.css'

export const ContentToysCampaign = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
        smartTv: 1500,
      },
    },
  })

  const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  // const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTV = useMediaQuery(theme.breakpoints.up('smartTv'))

  return (
    <Grid
      container
      spacing={1}
      style={{ background: isTV && 'rgba(7, 34, 39, .1)' }}
    >
      <Grid item xs={12}>
        <Paper elevation={5} className={styles.date__container}>
          <div>
            <CalendarTodayIcon /> <span>Fecha</span>
          </div>
          <div>
            <AccessTimeIcon /> <span>Hora</span>
          </div>
          <div>
            <PlaceIcon /> <span>Lugar</span>
          </div>
        </Paper>
      </Grid>
      <Grid style={{ padding: '20px' }} item xs={12} md={5}>
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt posuere vehicula. Curabitur nec auctor tortor. Donec nec
            suscipit enim, et congue felis. Integer non commodo metus. Donec
            finibus, eros nec volutpat tincidunt, nibh sem bibendum libero, in
            ultricies sem risus non nibh. Proin dictum, arcu dapibus tincidunt
            viverra, nibh nunc pharetra nibh, a mattis tellus elit eu purus.
            Vivamus eget sollicitudin ipsum. Suspendisse eget sem pellentesque,
            gravida nisi vel, gravida neque. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Quisque semper tellus dolor, tincidunt
            gravida augue volutpat non. Vestibulum dapibus non massa vitae
            mollis. Integer et nisl quis diam commodo elementum. Cras in mauris
            purus. Pellentesque iaculis est in justo suscipit, eu dignissim
            mauris ultrices. Fusce molestie ornare orci.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nunc rhoncus ligula id nibh aliquam, ac
            rutrum tortor pellentesque. Donec quis mi tempus, tempus nulla quis,
            scelerisque erat. Pellentesque eu gravida risus. Vestibulum sed
            pellentesque nisl. Donec ut nisl quis mauris iaculis molestie.
            Vivamus at turpis sodales, commodo risus eu, venenatis libero. Nulla
            eget dapibus mauris, a porta lacus. Vestibulum a tincidunt nulla.
            Duis a rutrum elit. Fusce metus eros, porta sit amet viverra a,
            aliquet sit amet ipsum.
          </p>
        </main>
      </Grid>
      {isMatchLaptop && (
        <Grid item xs={12} md={7}>
          {/* Hide on mobile & tablet */}
          <section id="gallery-campaign" className={styles.gallery__campaign}>
            <Box
              boxShadow={5}
              style={{
                height: '50vh',
                width: '100%',
                padding: '20px',
                backgroundImage: 'url("/images/blog-img-02.jpg")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <Box
              boxShadow={5}
              style={{
                height: '50vh',
                width: '100%',
                padding: '20px',
                backgroundImage: 'url("/images/blog-img-02.jpg")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
          </section>
        </Grid>
      )}
      {isMatchTablet && (
        <Grid item xs={12} style={{ padding: '50px 0' }}>
          <Timer date="2022-03-02T00:00:00.000000Z" />
        </Grid>
      )}
    </Grid>
  )
}
