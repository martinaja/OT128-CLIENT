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
  fecha,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 330,
        minWidth: 330,
        height: 400,
        background: 'rgba(255,255,255,0.75)',
        boxShadow: 3,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        mb: 4,
        position: 'relative',
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={String(image)}
        alt="card image"
      />
      {fecha && (
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '1000',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: '2px',
            paddingLeft: '6px',
            paddingRight: '4px',
          }}
        >
          <small>{new Date(fecha).toLocaleDateString('es-AR')}</small>
        </div>
      )}
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
                ? description.slice(0, 70).concat('...')
                : 'no se proporsionó descripción',
            ),
          )}
        </Typography>
        <CardActions>
          <Button size="small" component={Link} to={`/${link}/${id}`}>
            <strong> Leer más</strong>
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default CustomCard
