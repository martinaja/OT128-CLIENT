import { Grid } from '@material-ui/core'
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
          <Grid
            item
            container
            md={4}
            sm={12}
            alignItems="center"
            className="center"
          >
            <img alt="Logo ong." src="/images/logo-bco.png" className="logo" />
          </Grid>

          <Grid item container md sm={12}>
            <Link to={'/news'} item className="col" xs={12} sm md>
              <div className="col__title">Novedades</div>
            </Link>
            <Link to={'/activities'} item className="col" xs={12} sm md>
              <div className="col__title">Actividades</div>
            </Link>
            <Link to={'/nosotros'} item className="col" xs={12} sm md>
              <div className="col__title">Nosotros</div>
            </Link>
            <Link to={'/testimonios'} item className="col" xs={12} sm md>
              <div className="col__title">Testimonios </div>
            </Link>
            <Link to={'/donations'} item className="col" xs={12} sm md>
              <div className="col__title">Contribuye</div>
            </Link>
            <Link to={'/contacto'} item className="col" xs={12} sm md>
              <div className="col__title">Contacto</div>
            </Link>
          </Grid>

          <Grid item md={12} sm={12} className="social">
            <hr className="social__hr" />
            <div className="social__tags">
              <a href="https://www.facebook.com" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.linkedin.com" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
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
