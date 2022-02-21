import React from 'react'

import { Outlet } from 'react-router-dom'

import { FooterCampaigns } from './FooterCampaigns/FooterCampaigns'
import { HeaderCampaigns } from './HeaderCampaigns/HeaderCampaigns'

export const CampaignsLayout = () => {
  return (
    <>
      <HeaderCampaigns />
      <Outlet />
      <FooterCampaigns />
    </>
  )
}
