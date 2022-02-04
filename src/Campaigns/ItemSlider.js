import React, { useEffect, useState } from 'react'
import { Paper, useMediaQuery, createTheme, Typography } from '@mui/material'

const ItemSlider = ({ item }) => {
  const { image, text } = item

  const [height, setHeight] = useState('95vh')

  //Breakpoints
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  })

  const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  console.log(isMatchLaptop)

  // Inside this useEffect the size of the image is set
  useEffect(() => {
    if (isMatchDesktop) {
      setHeight('90vh')
    } else if (isMatchLaptop) {
      setHeight('65vh')
    } else if (isMatchTablet) {
      setHeight('55vh')
    } else {
      setHeight('40vh')
    }
  }, [isMatchTablet, isMatchLaptop, isMatchDesktop])

  return (
    <Paper>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: height,
          width: '100%',
          display: 'flex',
        }}
      />
      {isMatchLaptop && (
        <Typography sx={{ py: 2, textAlign: 'center' }}>{text}</Typography>
      )}
    </Paper>
  )
}

export default ItemSlider
