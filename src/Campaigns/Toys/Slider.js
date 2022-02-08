import { Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ItemSlider from '../ItemSlider'

const Slider = () => {
  const items = [
    {
      name: 'Imagen Campaña #1',
      text: 'Texto al pie de la imagen ejemplo #1 campaña de juguetes',
      image:
        'https://drive.google.com/uc?export=view&id=11f7CNIvmomFoAAFOvnuI5gqnyHIB5b8x',
    },
    {
      name: 'Imagen Campaña #2',
      text: 'Texto al pie de la imagen ejemplo #2 campaña de juguetes',
      image:
        'https://drive.google.com/uc?export=view&id=1VogDd65eOHEIt-hyRpd-ysDf0SfTdWfs',
    },
    {
      name: 'Imagen Campaña #3',
      text: 'Texto al pie de la imagen ejemplo #3 campaña de juguetes',
      image:
        'https://drive.google.com/uc?export=view&id=1dgAJeb0r2GG-BIy3pink6mPda4KANZO6',
    },
  ]

  return (
    <Box sx={{ my: 2 }}>
      <Carousel
        interval="5000"
        animation="slide"
        duration="750"
        swipe={false}
        indicators={false}
      >
        {items.map((item, i) => (
          <ItemSlider key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  )
}

export default Slider
