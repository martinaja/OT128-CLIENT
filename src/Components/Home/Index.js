import { Typography } from '@mui/material'
import React from 'react'
import NewsList from '../News/NewsList'


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
     <NewsList/>
    </div>
  )
}

export default Index
