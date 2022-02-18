import {  Box, Grid } from '@material-ui/core'
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
          <Box style={{display:"flex"}}>
         <Link to={'/news'} className="col" >
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
         </Box>
              
            </Grid>

       
            

            <Grid className="social">
              <hr className="social__hr" />
              <div className="social__tags">
                <a href="https://www.facebook.com" className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="https://www.instagram.com"
                  className="instagram social"
                >
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
