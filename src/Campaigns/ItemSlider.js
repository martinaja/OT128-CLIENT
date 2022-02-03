import React from 'react'
import { Paper, Button } from '@mui/material'

const ItemSlider = (props) => {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <img src="/images/campaign.jpg" alt="hola" />

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  )
}

export default ItemSlider
