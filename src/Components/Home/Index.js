import { Typography } from '@mui/material'
import React from 'react'
import { ListNews } from './ListNews'

function Index() {
  return (
    <div className="home-container">
      <Typography>Bienvenidos a Somos más</Typography>
      <Typography>Aqui ira el slider</Typography>
      <ListNews />
    </div>
  )
}

export default Index
