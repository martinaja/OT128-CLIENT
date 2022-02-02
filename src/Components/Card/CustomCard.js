import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import parse from 'html-react-parser'

const CustomCard = ({
  image = '/images/placeholder/150x150.png',
  name,
  description,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 350,
        minWidth: 350,
        background: 'rgba(255,255,255,0.6)',
        boxShadow: 3,
      }}
    >
      <CardMedia component="img" height="200" image={image} alt="card image" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography component="span" variant="body2" color="text.secondary">
          <div>{parse(description)}</div>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CustomCard
