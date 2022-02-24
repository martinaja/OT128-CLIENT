import { Box } from '@mui/material'
import React from 'react'
import './DonationStyle.scss'
import { alertDonationsMP } from './../AlertService'

export const DonationsMp = () => {
  return (
    <>
      <Box
        sx={{
          pl: { xl: '5%', md: '15%', xs: '20%' },
          pt: { md: '10%', xs: '15%' },
        }}
      >
        <button
          className="button"
          style={{ border: 'none' }}
          onClick={alertDonationsMP}
        >
          Donar!
        </button>
      </Box>
    </>
  )
}
