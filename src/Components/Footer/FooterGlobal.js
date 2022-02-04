import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Box } from '@mui/material'
import classNames from 'classnames'
import React, { Component } from 'react'


class Footer extends Component {
  render() {
    const { classes } = this.props
    const currentYear = new Date().getFullYear()
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={0}
          className={classNames(classes.footerText, classes.footerSections)}
        >
          <Grid item xs={12} sm={4}>
            <div vocab="http://schema.org/" typeof="Organization">
              <span property="name">O.N.G. Somos Más</span>
              <div property="address" typeof="PostalAddress">
                <span property="streetAddress">Villarroel 1052</span>
                <span property="addressLocality" style={{ display: 'block' }}>
                  Villa Crespo, C.A.B.A.{' '}
                </span>
                <span property="postalCode">CP 1414</span>
              </div>
              <span property="telephone">(011) 4723-4329</span>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'center' }}
                item
                xs={12}
              >
                <Box
                  component="img"
                  sx={{
                    width: 200,
                    height: 113,
                    m: '0',
                    p: 1,
                  }}
                  alt="Logo ong."
                  src="/images/Logo Somos Mas.png"
                />
                 <Box
                  component="img"
                  sx={{
                    width: 182,
                    height: 123,
                    m: 'auto',
                    p: 1,
                  }}
                  alt="Logo ong."
                  src="/images/oso.png"
                />
              </Grid>

              <Grid
                className={classes.flexContainer}
                style={{ justifyContent: 'flex-end' }}
                item
                xs={6}
              ></Grid>
              <Grid className={classes.flexContainer} item xs={3}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} style={{  marginLeft: '8' }}>
            <ul style={{ listStyle: 'none', margin: 0 }}>
              <li>
                <Button>Noticias</Button>
              </li>
              <li>
                <Button>Actividades</Button>
              </li>
              <li>
                <Button>Novedades</Button>
              </li>
              <li>
                <Button>Testimonios</Button>
              </li>
              <li>
                <Button>Nosotros</Button>
              </li>
              <li>
                <Button>Contacto</Button>
              </li>
            </ul>
          </Grid>
         
        </Grid>
        
        <Grid className={classes.subFooter} item xs={12}>
          <Typography
            className={classes.white}
            variant="subheading"
            component={'span'}
          >
            {currentYear} O.N.G Somos Más
          </Typography>
        </Grid>
      </div>
    )
  }
}

const styles = (theme) => ({
  root: {
    marginTop: 30,
    backgroundColor: `${theme.palette.primary[500]}`,
    borderTop: 'solid 3px #998643',
    paddingTop: '16px',
    overflowX: 'hidden',
  },
  footerSections: {
    margin: '0 16px',
  },
  subFooter: {
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    padding: '8px 16px 8px 16px',
    marginTop: '8px',
  },
  footerText: {
    color: '#fff',
    fontSize: '18px',
    lineHeight: 1.5,
  },
  invertedBtnDark: {
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px #fff solid',
    boxShadow: 'none',
    margin: '8px',
  },
  white: {
    color: '#ffffff',
  },
  flexContainer: {
    display: 'flex',
  },
})

export default withStyles(styles)(Footer)
