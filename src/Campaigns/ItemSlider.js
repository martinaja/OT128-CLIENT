import React, { useEffect, useState } from 'react'
import { Paper, Typography } from '@mui/material'
import { useBreakPoints } from '../utils/hooks/useBreakPoints'

const ItemSlider = ({ item }) => {
  const { image, text } = item
  const [height, setHeight] = useState('95vh')

  const isMatchSmartTv = useBreakPoints('(min-width: 1536px)')
  const isMatchDesktop = useBreakPoints('(min-width: 1200px)')
  const isMatchTablet = useBreakPoints('(min-width: 600px)')

  // Inside this useEffect the size of the image is set
  useEffect(() => {
    if (isMatchSmartTv) {
      setHeight('90vh')
    } else if (isMatchDesktop) {
      setHeight('65vh')
    } else if (isMatchTablet) {
      setHeight('55vh')
    } else {
      setHeight('40vh')
    }
  }, [isMatchTablet, isMatchDesktop, isMatchSmartTv])

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
      {isMatchDesktop && (
        <Typography sx={{ py: 2, textAlign: 'center' }}>{text}</Typography>
      )}
    </Paper>
  )
}

export default ItemSlider
