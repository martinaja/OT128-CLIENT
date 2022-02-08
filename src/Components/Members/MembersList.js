import { CardActions, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { getPublicHandler } from './../../Services/BaseHTTP/publicApiService';

import CustomCard from './../Card/CustomCard';

export const MembersList = () => {

    const url = process.env.REACT_APP_API_MEMBERS_GET;

    const [data, setData] = useState('')

    useEffect(() => {
        getPublicHandler(url).then(({ data }) => setData(data.data)) 
      }, [])

    console.log(data);

  return <>




  

        <h1>MemberLIst</h1>
        <Grid container rows={{ xs: 1, sm: 8, md: 6 }} spacing={{ xs: 2, md: 3 }}>
            {data?.length > 0 ? (
              data?.map((element) => {
                return (
                  <Grid item key={element.id}>


                  <Card sx={{ maxWidth: 300}}>
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
                    {element.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={element.facebookUrl}>Facebook</Button>
                <Button size="small" href={element.linkedinUrl}>LinkedIn</Button>
            </CardActions>
            </Card>












                  </Grid>
                )
              })
            ) : (
              <h1>No se encontraron resultados</h1>
            )}
          </Grid>

  </>;
};
