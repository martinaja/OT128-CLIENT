import styled from '@emotion/styled'
import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'
import mp from '../../assets/mp.jpg'
import Swal from 'sweetalert2'


export const DonationsMp = ({ text = <h1>Colabore</h1> }) => {
  const image = {
    image: { mp },
    title: 'Donar',
    width: '100%',
    position: 'center',
  }
  function alertDonationsMP(image) {
    Swal.fire({
      title: 'Ingrese su donación',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      color: 'White',
      background: 'Black',
      showCancelButton: true,

      confirmButtonText: 'Aceptar',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return 1
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: ` Gracias por su donación `,
          imageUrl: image,
          confirmButtonText: 'Ok',
          preConfirm: () => {
            history.push('/gracias')
          },
        })
      }
    })
  }

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'center',
    height: 200,
    // [theme.breakpoints.display('sm')]: {
    //   width: '60% !important', // Overrides inline-style
    //   height: 200import { Swal } from 'sweetalert2-react-content';

    // },
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
  const history = useHistory()
  return (
    <>
      <Box
        class="animate__animated animate__fadeInDownBig"
        sx={{ maxWidth: '8rem' }}
      
      >
        <img
          style={{ marginLeft: '33rem' }}
          alt="Manito ong."
          src="/images/hand-down.png"
          className="logo"
        />
      </Box>
      <Box
       
        class="animate__animated animate__fadeInUpBig"
        sx={{ width: '100%', maxWidth: 800, pl: 2, mr: 3 }}
      >
        <Typography variant="body1" gutterBottom fontWeight={700} marginLeft={65}>
          {text}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: 600,
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
