import { Avatar, Button, Paper, Typography } from '@mui/material'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'

export const TestimonialGrid = ({ id, link, name, image, description }) => {
  const descriptionParse = parse(String(description)).props?.children

  return (
    <Paper
      sx={{
        boxShadow: 8,
        backgroundColor: 'transparent',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          marginBottom: '2rem',
          width: '100%',
          maxHeight: '15rem',
          padding: '1rem',
        }}
      >
        <Avatar
          sx={{
            width: 200,
            height: 200,
          }}
          src={image}
          alt={name}
        />
        <div>
          <Typography variant="h5" sx={{ mb: 2 }}>
            {name}
          </Typography>
          <Typography variant="h7">
            {descriptionParse?.length >= 60
              ? descriptionParse.slice(0, 60).concat('...')
              : descriptionParse?.length < 60 && descriptionParse?.length > 0
              ? descriptionParse
              : 'no se proporcionó descripción'}
          </Typography>
          <Button
            style={{ position: 'absolute', bottom: 5, right: 5 }}
            component={Link}
            to={`${link}/${id}`}
          >
            Leer Más
          </Button>
        </div>
      </div>
    </Paper>
  )
}
