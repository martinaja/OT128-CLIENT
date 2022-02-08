import { Grid, IconButton } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import React, {useState, useEffect} from 'react'
import './Footer.css'
import { useBreakPoints } from './../../utils/hooks/useBreakPoints';


function Footer() {
  const isMatchSmartTv = useBreakPoints('(min-width: 1536px)')
  const isMatchDesktop = useBreakPoints('(min-width: 1200px)')
  const isMatchTablet = useBreakPoints('(min-width: 600px)')

  const startHeight = () => {
    const WindowWidth = window.innerWidth
    if (WindowWidth >= 1536) {
      return '100vh'
    } else if (WindowWidth < 1536 && WindowWidth >= 1200) {
      return '40vh'
    } else if (WindowWidth < 1200 && WindowWidth >= 600) {
      return '0vh'
    } else if (WindowWidth < 600) {
      return '45vh'
    }
  }

  const [height, setHeight] = useState(startHeight())

  // Inside this useEffect the size of the image is set
  useEffect(() => {
    setHeight(startHeight())
  }, [isMatchSmartTv, isMatchDesktop, isMatchTablet])

  return (
    <>
      <div className="container">
        <div style={{ minHeight: height }}>
        <Grid container className="footer__container">
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
              className="logo"
            />
            <img alt="Logo ong." src="/images/oso-bco.png" className="logo" />
          </Grid>

          <Grid item container md sm={12}>
            <Grid item className="col" xs={12} sm md>
              <div className="col__title">Noticias</div>
            </Grid>
            <Grid item className="col" xs={12} sm md>
              <div className="col__title">Actividades</div>
            </Grid>
            <Grid item className="col" xs={12} sm md>
              <div className="col__title">Novedades</div>
            </Grid>
            <Grid item className="col" xs={12} sm md>
              <div className="col__title">Testimonios </div>
            </Grid>
            <Grid item className="col" xs={12} sm md>
              <div className="col__title">Nosotros</div>
            </Grid>
            <Grid item className="col" xs={12} sm md>
              <div className="col__title">Contacto</div>
            </Grid>
          </Grid>
         

          <Grid item md={12} sm={12} className="social">
            <hr className="social__hr" />
            <div className="social__tags">
              <IconButton>
                <FacebookIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <LinkedInIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <TwitterIcon className="social__tags__color" />
              </IconButton>
              <IconButton>
                <GitHubIcon className="social__tags__color" />
              </IconButton>
            </div>
            <div className="social__copyrights">
              © 2020 Somos mas. All Rights Reserved.
            </div>
          </Grid>
        </Grid>
        </div>
        
      </div>
    </>
  )
}

export default Footer