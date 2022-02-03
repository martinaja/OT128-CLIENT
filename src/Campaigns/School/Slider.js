import { Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ItemSlider from '../ItemSlider'

const Slider = () => {
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

  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ]

  return (
    <Box sx={{ m: 'auto', p: 'auto', maxWidth: '100%' }}>
      <Carousel>
        {items.map((item, i) => (
          <ItemSlider key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  )
}

export default Slider
