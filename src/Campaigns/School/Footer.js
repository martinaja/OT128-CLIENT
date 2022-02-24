import { Grid } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Instagram from '@material-ui/icons/Instagram'
import LinkedIn from '@material-ui/icons/LinkedIn'
import React from 'react'
import style from '../../Components/PublicWeb/Footer/Footer.module.css'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className={style.container}>
        <Grid container className={style.footer__container}>
          <Link to={'/'} style={{ margin: 'auto' }}>
            <img
              alt="Logo ong."
              src="/images/salvavidas-bco.png"
              className={style.logo}
            />
          </Link>

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
