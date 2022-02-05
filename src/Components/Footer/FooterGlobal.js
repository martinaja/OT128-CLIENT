import { Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import { Box, ButtonGroup } from '@mui/material'
import classNames from 'classnames'
import React, { Component } from 'react'
import { Facebook, Twitter, Instagram, LinkedIn } from '@material-ui/icons'

class Footer extends Component {
  render() {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          className={classNames(classes.footerText, classes.footerSections)}
        >
          <Grid item xs={12} sm={4} style={{ marginTop: '1rem' }}>
            <div vocab="http://schema.org/" typeof="Organization">
              <span property="name">O.N.G. Somos Más</span>
              <div property="address" typeof="PostalAddress">
                <span property="streetAddress">Villarroel 1052</span>
                <span property="addressLocality" style={{ display: 'block' }}>
                  Villa Crespo, C.A.B.A.{' '}
                </span>
                <span property="postalCode">CP 1414</span>
              </div>
              <span property="telephone">(011) 4854-6368</span>
            </div>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Grid container>
              <Grid
                className={classes.flexContainer}
                style={{ marginTop: '3.5rem', marginBottom: '3.5rem'}}
                item
                xs={12}
              >
                <Box
                
                  component="img"
                  sx={{
                    width: 200,
                    height: 113,
                    m: '0',
                    p: 0,
                  }}
                  alt="Logo ong."
                  src="/images/logo-verde.png"
                />

                <Box
                  style={{ marginLeft: '3.5rem' }}
                  component="img"
                 
                  sx={{
                    maxWidth: 182,
                    maxHeight: 123,
                    m: '0',
                    p: 0,
                  }}
                  alt="Logo ong."
                  src="/images/oso-verde.png"
                />
              </Grid>
              <Grid className={classes.flexContainer} item xs={3}></Grid>
            </Grid>
          </Grid>

          <Grid></Grid>

          <Grid
            style={{
              marginTop: '3.5rem',
              marginBottom: '3.5rem',
              marginLeft: '8rem',
              color: '#072227'
            }}
          >
            <h3>www.somosmas.com</h3>
            <Box>
              <Instagram />

              <Facebook />

              <Twitter />

              <LinkedIn />
            </Box>
          </Grid>
        </Grid>

        <Grid className={classes.subFooter} item xs={12}  >
          <Grid item xs={18} sm={4} >
            <ButtonGroup  style={{ widht: '1080px' }} variant="text" color="inherit" size="large">
              <Button   style={{ marginLeft: '6.5rem' }}>Noticias</Button>
              <Button  style={{ marginLeft: '4.5rem' }}>Actividades</Button>
              <Button  style={{ marginLeft: '4.5rem' }}>Novedades</Button>
              <Button  style={{ marginLeft: '4.5rem' }}>Testimonios</Button>
              <Button  style={{ marginLeft: '4.5rem' }}>Nosotros</Button>
              <Button  style={{ marginLeft: '4.5rem' }}>Contacto</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const styles = (theme) => ({
  root: {
    marginTop: 30,
    backgroundColor: `${theme.palette.secondary[500]}`,
    borderTop: 'solid 3px #35858B ',
    paddingTop: '16px',
    overflowX: 'hidden',
  
  },
  footerSections: {
    margin: '0 16px',
  },
  subFooter: {
    backgroundColor: '#35858B',
    padding: '8px 16px 8px 16px',
    marginTop: '8px',
  },
  footerText: {
    color: '#35858B',
    fontSize: '18px',
    lineHeight: 1.5,
  },

  white: {
    color: '#35858B',
  },
  flexContainer: {
    display: 'flex',
  },
})

export default withStyles(styles)(Footer)
