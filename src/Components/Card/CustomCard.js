import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import parse from 'html-react-parser'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const CustomCard = ({
  id,
  image = '/images/placeholder/150x150.png',
  name,
  description,
  link,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 330,
        minWidth: 330,
        height: 400,
        background: 'rgba(0,0,0,0.03)',
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={String(image)}
        alt="card image"
      />
      <CardContent
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          paddingBottom: 0,
          height: 200,
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {String(name)}
        </Typography>
        <Typography component={'span'} variant={'body2'} color="text.secondary">
          {parse(
            String(
              description
                ? description.slice(0, 95).concat('...')
                : 'no se proporsionó descripción',
            ),
          )}
        </Typography>
        <CardActions>
          <Button size="small" component={Link} to={`/${link}/${id}`}>
            <strong>> Leer más</strong>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CustomCard
