import { useEffect, useState } from 'react'
// import { createTheme, useMediaQuery } from '@material-ui/core'

export const useBreakPoints = (query) => {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, query])

  return matches
}

//   const theme = createTheme({
//     breakpoints: {
//       values: {
//         mobile: 0,
//         tablet: 640,
//         laptop: 1024,
//         desktop: 1200,
//       },
//     },
//   })

//   const [isMatchTablet, setIsMatchTablet] = useState(
//     useMediaQuery(theme.breakpoints.up('tablet')),
//   )
//   const [isMatchLaptop, setIsMatchLaptop] = useState(
//     useMediaQuery(theme.breakpoints.up('laptop')),
//   )
//   const [isMatchDesktop, setIsMatchDesktop] = useState(
//     useMediaQuery(theme.breakpoints.up('desktop')),
//   )

//   const useUpTablet = () => {
//     setIsMatchTablet(useMediaQuery(theme.breakpoints.up('tablet')))
//   }
//   const useUpLaptop = () => {
//     setIsMatchLaptop(useMediaQuery(theme.breakpoints.up('laptop')))
//   }
//   const useUpDesktop = () => {
//     setIsMatchDesktop(useMediaQuery(theme.breakpoints.up('desktop')))
//   }

//   return [
//     isMatchTablet,
//     isMatchLaptop,
//     isMatchDesktop,
//     useUpTablet,
//     useUpLaptop,
//     useUpDesktop,
//   ]
// }
