import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Content from './Content'

import { Container } from '@mui/material'


const ToysCampaign = () => {
  return (
    <>
      <Header />
      <Container>
        <Slider />
        <Content />
      </Container>
      {/* {<Footer /> } */}
    </>
  )
}

export default ToysCampaign
