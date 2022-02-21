import React from 'react'

import { Grid, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import styles from './FooterPublic.module.css'

export const FooterPublic = () => {
  return (
    <>
      <div className={styles.footer__container}>
        <Grid container>
          <Grid
            item
            container
            md={4}
            sm={12}
            alignItems="center"
            className="center"
          >
            <img
              alt="Logo ong."
              src="/images/logo-bco.png"
              className={styles.logo}
            />
          </Grid>

          <Grid item container md sm={12}>
            <Grid item className={styles.col} xs={12} sm md>
              <div className="styles.col__title">Noticias</div>
            </Grid>
            <Grid item className={styles.col} xs={12} sm md>
              <div className="styles.col__title">Actividades</div>
            </Grid>
            <Grid item className={styles.col} xs={12} sm md>
              <div className={styles.col__title}>Novedades</div>
            </Grid>
            <Grid item className={styles.col} xs={12} sm md>
              <div className={styles.col__title}>Testimonios </div>
            </Grid>
            <Grid item className={styles.col} xs={12} sm md>
              <div className={styles.col__title}>Nosotros</div>
            </Grid>
            <Grid item className={styles.col} xs={12} sm md>
              <div className={styles.col__title}>Contacto</div>
            </Grid>
          </Grid>

          <Grid item md={12} sm={12} className={styles.social}>
            <hr className={styles.social__hr} />
            <div className={styles.social__tags}>
              <IconButton>
                <FacebookIcon className={styles.social__tags__color} />
              </IconButton>
              <IconButton>
                <LinkedInIcon className={styles.social__tags__color} />
              </IconButton>
              <IconButton>
                <TwitterIcon className={styles.social__tags__color} />
              </IconButton>
              <IconButton>
                <GitHubIcon className={styles.social__tags__color} />
              </IconButton>
            </div>
            <div className={styles.social__copyrights}>
              © 2020 Somos mas. All Rights Reserved.
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
