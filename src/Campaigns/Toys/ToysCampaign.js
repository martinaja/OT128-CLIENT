import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Content from './Content'
import Footer from './Footer'
import { Container } from '@mui/material'
import { useEffect } from 'react'
import handleDisplayByID from '../../utils/handleDisplayByID'
// import FooterToys from './FooterToys'

const ToysCampaign = () => {
  useEffect(() => {
    handleDisplayByID('main-header', 'none')
    return () => handleDisplayByID('main-header', '')
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Slider />
        <Content />
      </Container>
      <Footer />
    </>
  )
}

export default ToysCampaign
