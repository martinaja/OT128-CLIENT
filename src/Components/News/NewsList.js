import React from 'react'
import { useState, useEffect } from 'react'

import { Grid } from '@mui/material';
import CustomCard from './../Card/CustomCard'
import { SkeletonArticle } from './../Skeleton/SkeletonArticle'
import { getPublicHandler } from '../../Services/BaseHTTP/publicApiService'

const NewsList = () => {
  const [data, setData] = useState('')

  const url = process.env.REACT_APP_API_NEWS_GET

  useEffect(() => {
    getPublicHandler(url).then(({ data }) => setData(data.data)) 
  }, [])

 
  return (
    <>
      {!data ? (
        <SkeletonArticle />
      ) : (
        <>
          {' '}
          <h1>Novedades</h1>
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
        </>
      )}
    </>
  )
}

export default NewsList
