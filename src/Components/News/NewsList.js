import React from 'react'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import CustomCard from './../Card/CustomCard'
import { SkeletonArticle } from './../Skeleton/SkeletonArticle'
import { getNews } from '../../Services/apiServices/newsApiService'
import { alertServiceError } from '../AlertService'

const NewsList = () => {
  const [data, setData] = useState(null)

  useEffect(
    () =>
      (async () => {
        const requestNews = await getNews()
        if (requestNews.error) {
          alertServiceError(
            requestNews.message,
            'No se pudo obtener la información solicitada',
          )
        }

        const newsData = requestNews.data?.data
        newsData
          ? setData(newsData)
          : alertServiceError(
              'No se pudo cargar la noticia',
              'Verificá que la URL sea correcta',
            )
      })(),
    [],
  )

  return (
    <>
      {!data ? (
        <SkeletonArticle />
      ) : (
        <>
          {' '}
          <h1>Novedades</h1>
          <Grid
            container
            rows={{ xs: 1, sm: 8, md: 6 }}
            spacing={{ xs: 2, md: 3 }}
          >
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
