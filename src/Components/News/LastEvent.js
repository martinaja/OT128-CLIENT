import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

import { useBreakPoints } from '../../utils/hooks/useBreakPoints'

const LastEvent = () => {
  const isMatchDesktop = useBreakPoints('(min-width: 1200px)')
  const isMatchTablet = useBreakPoints('(min-width: 600px)')

  const [sizeVideo, setSizeVideo] = useState({
    width: '320px',
    height: '180px',
  })

  useEffect(() => {
    if (isMatchDesktop) {
      setSizeVideo({ width: '680px', height: '360px' })
    } else if (isMatchTablet) {
      setSizeVideo({ width: '530px', height: '250px' })
    } else {
      setSizeVideo({ width: '320px', height: '180px' })
    }
  }, [isMatchTablet, isMatchDesktop])

  const image = '/images/Presentación video.png'

  return (
    <Box
      sx={{
        alignItems: 'center',
        my: 9,
        pb: 2,
        backgroundImage: 'url(/images/Presentación video.png)',
        boxShadow: 3,
      }}
    >
      <Typography variant="h3" component="div" gutterBottom>
        {' '}
        Mira nuestro ultimo evento!
      </Typography>
      <ReactPlayer
        width={sizeVideo.width}
        height={sizeVideo.height}
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
        url="https://www.youtube.com/watch?v=4YnSk1gI_Oo"
      />
    </Box>
  )
}

export default LastEvent
