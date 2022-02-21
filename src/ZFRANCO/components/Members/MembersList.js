import React, { useEffect, useState } from 'react'

import { getPublicHandler } from '../../services/BaseHTTP/publicApiService'

import parse from 'html-react-parser'

import {
  CardActions,
  Grid,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Box,
} from '@mui/material'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'

export const MembersList = () => {
  const url = process.env.REACT_APP_API_MEMBERS_GET

  const [data, setData] = useState('')

  useEffect(() => {
    getPublicHandler(url).then(({ data }) => setData(data.data))
  }, [])

  return (
    <>
      <Box sx={{ m: 2 }}>
        <h2 style={{ margin: '35px 0' }}>Integran nuestra organización</h2>
        <Grid
          sx={{ justifyContent: 'space-evenly' }}
          container
          rows={{ xs: 1, sm: 8, md: 6 }}
          spacing={{ xs: 3, md: 3 }}
        >
          {data?.length > 0 ? (
            data?.map((element) => {
              return (
                <Grid item key={element.id}>
                  <Card
                    sx={{
                      maxWidth: 260,
                      minHeight: 400,
                      display: 'flex',
                      justifyContent: 'space-between',
                      flexDirection: 'column',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={element.image}
                      alt={element.name}
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <h4>{element.name}</h4>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {parse(element.description)}
                      </Typography>
                    </CardContent>

                    <CardActions
                      style={{ marginLeft: 'auto', marginRight: 'auto' }}
                    >
                      <Button size="small" href={element.facebookUrl}>
                        <Facebook color="primary" /> Facebook
                      </Button>
                      <Button size="small" href={element.linkedinUrl}>
                        <LinkedIn color="primary" /> LinkedIn
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          ) : (
            <h1>No se encontraron resultados</h1>
          )}
        </Grid>
      </Box>
    </>
  )
}
