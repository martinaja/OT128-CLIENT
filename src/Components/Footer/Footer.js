import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Grid } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em',
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none', //For removing the underline from the links in the footer.
  },
  gridItem: {
    margin: '3em',
  },
  icon: {
    height: '4em',
    weight: '4em',
    [theme.breakpoints.down('xs')]: {
      height: '2.5em',
      width: '2.5em',
    },
  },
  socialContianer: {
    position: 'absolute',
    marginTop: '-6em',
    right: '1.5em',
    [theme.breakpoints.down('xs')]: {
      right: '0.6em',
    },
  },
}))

export default function Footer(props) {
  const classes = useStyles()
  const { setValue, setSelectedIndex } = props //The Footer components is getting props from App component in moudle App.js
  //mdDown is for media with screen size medium and smaller. Breakpoint for smaller screens to hide the links in the footer.
  return (
    <footer className={classes.footer}>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Box
              component="img"
              sx={{
                width: 108,
                height: 53,
                ml: 0,
                p: 1,
              }}
              alt="Logo ong."
              src="/images/Logo Somos Mas.png"
            />
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/services"
              className={classes.link}
              onClick={() => {
                setValue(1)
                setSelectedIndex(0)
              }}
            >
              Noticias
            </Grid>
            <Grid
              item
              component={Link}
              to="/customsoftware"
              className={classes.link}
              onClick={() => {
                setValue(1)
                setSelectedIndex(1)
              }}
            >
              Actividades
            </Grid>
            <Grid
              item
              component={Link}
              to="/mobileapps"
              className={classes.link}
              onClick={() => {
                setValue(1)
                setSelectedIndex(2)
              }}
            >
              Novedades
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}></Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/about"
              className={classes.link}
              onClick={() => setValue(3)}
            >
              Actividades
            </Grid>
            <Grid
              item
              component={Link}
              to="/about"
              className={classes.link}
              onClick={() => setValue(3)}
            >
              Testimonio
            </Grid>
            <Grid
              item
              component={Link}
              to="/about"
              className={classes.link}
              onClick={() => setValue(3)}
            >
              Nosotros
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid
              item
              component={Link}
              to="/contact"
              className={classes.link}
              onClick={() => setValue(4)}
            >
              Contacto
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  )
}
