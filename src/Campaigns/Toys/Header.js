import React from 'react'
import {
  useMediaQuery,
  createTheme,
  AppBar,
  Box,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { useBreakPoints } from '../../utils/hooks/useBreakPoints'

const Header = () => {
  // const [
  //   isMatchTablet,
  //   isMatchLaptop,
  //   isMatchDesktop,
  //   useUpTablet,
  //   useUpLaptop,
  //   useUpDesktop,
  // ] = useBreakPoints()
  const isMatchDesktop = useBreakPoints('(min-width: 1200px)')
  const isMatchLaptop = useBreakPoints('(min-width: 1024px)')
  const isMatchTablet = useBreakPoints('(min-width: 640px)')
  // console.log('probando hook', desktop)

  // console.log(isMatchTablet)
  // useUpTablet()
  // useUpLaptop()
  // useUpDesktop()
  // Breakpoints
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       mobile: 0,
  //       tablet: 640,
  //       laptop: 1024,
  //       desktop: 1200,
  //     },
  //   },
  // })

  // const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  // const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  // const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          background: isMatchDesktop ? 'rgba(7,34,39,0.7)' : 'rgb(7,34,39)',
        }}
      >
        <Toolbar>
          {isMatchTablet && (
            <Box
              component="img"
              sx={{
                width: 108,
                height: 53,
                m: 0,
                p: 1,
              }}
              alt="Logo ong."
              src="/images/Logo Somos Mas.png"
            />
          )}

          <Box
            component="img"
            sx={{
              height: 60,
              m: isMatchLaptop ? 0 : 'auto',
              p: 1,
            }}
            alt="Logo campaña."
            src="/images/oso.png"
          />

          {isMatchLaptop && (
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                p: 1,
                m: 'auto',
              }}
            >
              Eslogan ejemplo.
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Header
