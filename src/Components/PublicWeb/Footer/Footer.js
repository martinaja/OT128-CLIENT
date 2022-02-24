import { Box, Grid } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './Footer.module.css'
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';


function Footer() {
  return (
    <>
      <div className={style.container}>
        <Grid container className={style.footer__container}>
          <Grid container alignItems="center" className={style.center}>
            <Link to={'/'}>
              <img
                alt="Logo ong."
                src="/images/logo-bco.png"
                className={style.logo}
              />
            </Link>
            <Grid className={style.col}>
              <Link to={'/novedades'} className={style.col}>
                <p className={style.col__title}>Novedades</p>
              </Link>
              <Link to={'/activities'} className={style.col}>
                <p className={style.col__title}>Actividades</p>
              </Link>
              <Link to={'/nosotros'} className={style.col}>
                <p className={style.col__title}>Nosotros</p>
              </Link>
              <Link to={'/testimonios'} className={style.col}>
                <p className={style.col__title}>Testimonios </p>
              </Link>
              <Link to={'/donations'} className={style.col}>
                <p className={style.col__title}>Contribuye</p>
              </Link>
              <Link to={'/contacto'} className={style.col} xs={12}>
                <p className={style.col__title}>Contacto</p>
              </Link>
            </Grid>
          </Grid>
          <Grid className={style.social}>
            <Box className={style.social__tags_color}>
              <a className={style.social} href="https://www.facebook.com">
                <Facebook size="2x" />
              </a>
              <a className={style.social} href="https://www.twitter.com">
                <Twitter size="2x" />
              </a>
              <a className={style.social} href="https://www.instagram.com">
                <Instagram size="2x" />
              </a>
              <a className={style.social} href="https://www.linkedin.com">
                <LinkedIn size="2x" />
              </a>
            </Box>
            <div className={style.social__copyrights}>
              © 2020 Somos mas. All Rights Reserved.
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Footer
