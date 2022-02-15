import styled from '@emotion/styled'
import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import mp from '../../assets/mp.jpg'
import { alertDonationsMP } from './../AlertService';


export const DonationsMp = ({ text = 'Hacer donativos' }) => {
  const image = {
    image: { mp },
    title: 'Donar',
    width: '50%',
  }

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '60% !important', // Overrides inline-style
      height: 200


    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
    },
  }))

  const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  })

  const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  }))

  const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  }))

  const ImageMarked = styled('span')(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  }))

  return (
    <>
      <Box sx={{ width: '100%', maxWidth: 500, pl: 2 }}>
        <Typography variant="h4" component="div" gutterBottom>
          Donar
        </Typography>
        <Typography variant="body1" gutterBottom>
          {text}
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 500,
          width: '100%',
          pl: 2,
        }}
      >
        <ImageButton
        onClick={alertDonationsMP}
          focusRipple
          key={image.title}
          style={{
            width: image.width,
          }}
        >
          <ImageSrc style={{ backgroundImage: `url(${mp})` }} />
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 10,
                pt: 0,
                pb: (theme) => `calc(${theme.spacing(17)})`,
              }}
            >
              <h2>{image.title}</h2>
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      </Box>
    </>
  )
}
