import React, { useEffect } from 'react'

import { Container } from '@mui/material'

import { SliderSchoolCampaign } from './SliderSchoolCampaign'
import { ContentSchoolCampaign } from './ContentSchoolCampaign'

// const handleDisplayByID = (element, display) => {
//   return (document.getElementById(element).style.display = display)
// }

export const HomeSchoolCampaign = () => {
  // useEffect(() => {
  //   handleDisplayByID('main-header', 'none')
  //   return () => handleDisplayByID('main-header', '')
  // }, [])

  return (
    <>
      <Container>
        <SliderSchoolCampaign />
        <ContentSchoolCampaign />
      </Container>
    </>
  )
}
