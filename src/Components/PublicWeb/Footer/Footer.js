import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
      <div className="container">
        <Grid container className="footer__container">
          <Grid container alignItems="center" className="center">
            <Link to={'/'}>
              <img
                alt="Logo ong."
                src="/images/logo-bco.png"
                className="logo"
              />
            </Link>
            <Grid style={{ display: 'flex' }} className="col">
              <Link to={'/novedades'} className="col">
                <p className="col__title">Novedades</p>
              </Link>
              <Link to={'/activities'} className="col">
                <p className="col__title">Actividades</p>
              </Link>
              <Link to={'/nosotros'} className="col">
                <p className="col__title">Nosotros</p>
              </Link>
              <Link to={'/testimonios'} className="col">
                <p className="col__title">Testimonios </p>
              </Link>
              <Link to={'/donations'} className="col">
                <p className="col__title">Contribuye</p>
              </Link>
              <Link to={'/contacto'} className="col" xs={12}>
                <p className="col__title">Contacto</p>
              </Link>
            </Grid>
          </Grid>
          <Grid className="social">
            <Box className="social__tags_color">
              <a className="social" href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

              <a className="social" href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a className="social" href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a className="social" href="https://www.linkedin.com">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Box>
            <div className="social__copyrights">
              © 2020 Somos mas. All Rights Reserved.
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Footer
