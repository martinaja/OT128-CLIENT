import { Grid } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import React from 'react'
// import '../../Components/PublicWeb/Footer/Footer.module.css'

function Footer() {
  return (
    <>
      <div className="container">
        <div style={{ minHeight: '65vh' }}></div>
        <Grid >
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
              src="/images/school-bco.png"
              className="logo"
            />
          </Grid>

          <Grid item md={12} sm={12} className="social">
            <hr className="social__hr" />
            <div className="social__tags">
            <a href="https://www.facebook.com">
                <Facebook size="2x" />
              </a>
              <a  href="https://www.twitter.com">
                <Twitter size="2x" />
              </a>
              <a  href="https://www.instagram.com">
                <Instagram size="2x" />
              </a>
              <a  href="https://www.linkedin.com">
                <LinkedIn size="2x" />
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
