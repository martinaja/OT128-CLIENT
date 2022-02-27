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
import React from 'react'
import { useEffect, useState } from 'react'
import { Facebook } from '@material-ui/icons'
import { LinkedIn } from '@material-ui/icons'
import parse from 'html-react-parser'
import { getPublicMembers } from '../../Services/apiServices/membersApiService'

const mock = [
  {
    image:
      'https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Juana González',
    description: 'Trabajadora social',
  },
  {
    image:
      'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Diego Pérez',
    description: 'Finanzas',
  },
  {
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbSUyMG1lbWJlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Sofía Sánchez',
    description: 'Logística',
  },
]

export const MembersList = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    getPublicMembers().then(({ data }) => setData(data.data))
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
          {
            // MOCK FOR PRESENTATION
            // mock?.length > 0 ? (

            //   mock?.map((element) => {
            //     return (
            //       <Grid item key={element.id}>
            //         <Card
            //           sx={{
            //             width: 300,
            //             minHeight: 500,
            //             display: 'flex',
            //             justifyContent: 'space-between',
            //             flexDirection: 'column',
            //           }}
            //         >
            //           <CardMedia
            //             component="img"
            //             image={element.image}
            //             alt={element.name}
            //             style={{
            //               height: '275px',
            //               objectFit: 'cover',
            //             }}
            //           />

            //           <CardContent>
            //             <Typography gutterBottom variant="h5" component="div">
            //               <h4>{element.name}</h4>
            //             </Typography>
            //             <Typography variant="h7" color="text.secondary">
            //               {parse(element.description ? element.description : '')}
            //             </Typography>
            //           </CardContent>

            //           <CardActions
            //             style={{ marginLeft: 'auto', marginRight: 'auto' }}
            //           >
            //             <Button size="small" href={element.facebookUrl}>
            //               <Facebook color="primary" /> Facebook
            //             </Button>
            //             <Button size="small" href={element.linkedinUrl}>
            //               <LinkedIn color="primary" /> LinkedIn
            //             </Button>
            //           </CardActions>
            //         </Card>
            //       </Grid>
            //     )
            //   })
            // API DATA

            data?.length > 0 ? (
              data?.map((element) => {
                return (
                  <Grid item key={element.id}>
                    <Card
                      sx={{
                        width: 300,
                        minHeight: 500,
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column',
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={element.image}
                        alt={element.name}
                        style={{
                          height: '275px',
                          objectFit: 'cover',
                        }}
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          <h4>{element.name}</h4>
                        </Typography>
                        <Typography variant="h7" color="text.secondary">
                          {parse(
                            element.description ? element.description : '',
                          )}
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
            )
          }
        </Grid>
      </Box>
    </>
  )
}
