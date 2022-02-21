import React, { useEffect } from 'react'

import { Container } from '@mui/material'

import { SliderToysCampaign } from './SliderToysCampaign'

import { ContentToysCampaign } from './ContentToysCampaign'

export const HomeToysCampaign = () => {
  // useEffect(() => {
  //   handleDisplayByID('main-header', 'none')
  //   return () => handleDisplayByID('main-header', '')
  // }, [])

  return (
    <>
      <Container>
        <SliderToysCampaign />
        <ContentToysCampaign />
      </Container>
    </>
  )
}
