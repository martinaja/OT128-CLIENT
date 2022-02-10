import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Content from './Content'
import { Container } from '@mui/material'
import { useEffect } from 'react'
import handleDisplayByID from '../../utils/handleDisplayByID'

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
    </>
  )
}

export default ToysCampaign
