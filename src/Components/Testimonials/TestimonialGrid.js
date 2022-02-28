import { Avatar, Paper, Typography } from '@mui/material'
import parse from 'html-react-parser'

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
        <div
          style={{
            width: '100%',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            {name}
          </Typography>
          <Typography variant="body1" textAlign="center">
            {descriptionParse?.length > 0
              ? descriptionParse
              : 'no se proporcionó descripción'}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
