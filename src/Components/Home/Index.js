import { Typography } from '@mui/material'
import React from 'react'
import { ListNews } from './ListNews'

function Index() {
  const content = (
    <>
      <Typography>
        <h1>Bienvenidos a Somos más</h1>
      </Typography>
      <Typography>Aqui ira el slider</Typography>
    </>
  )

  return (
    <div className="home-container">
      {content}
      <ListNews />
    </div>
  )
}

export default Index
