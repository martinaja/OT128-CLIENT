import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import './Donation.scss'
import { alertDonationsMP } from './../AlertService'

export const DonationsMp = () => {
  return (
    <Box
      sx={{
        pl: { md: '15%', xs: '20%' },
        pt: { md: '10%', xs: '15%' },
      }}
    >
      <a class="button" href="#">
        Donar!
      </a>
    </Box>
  )
}
