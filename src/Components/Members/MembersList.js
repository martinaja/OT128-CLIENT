import { Grid } from '@mui/material';
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
                    <CustomCard
                      image={element.image}
                      name={element.name}
                      description={element.content}
                    />
                  </Grid>
                )
              })
            ) : (
              <p>No hay novedades</p>
            )}
          </Grid>

  </>;
};
