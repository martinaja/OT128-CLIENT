import React from 'react'
import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import CustomCard from './../Card/CustomCard'
import { SkeletonArticle } from './../Skeleton/SkeletonArticle'
import { getNews } from '../../Services/apiServices/newsApiService'
import { alertServiceError } from '../AlertService'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNew } from '../../features/news/newsReducer'

const NewsList = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.news)

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch(fetchNew())
    }

    if (state.status === 'error') {
      alertServiceError(
        state.errorMsg,
        'Se produjo un error al intentar obtener datos de categorías',
      )
    }
  }, [state.status, dispatch, state.errorMsg])

  return (
    <>
      {state.loader ? (
        <SkeletonArticle />
      ) : (
        <>
          {' '}
          <h1>Novedades</h1>
          <Grid
            sx={{ justifyContent: 'space-evenly' }}
            container
            rows={{ xs: 1, sm: 8, md: 6 }}
            spacing={{ xs: 2, md: 3 }}
          >
            {state.news?.length > 0 ? (
              state.news?.map((element) => {
                return (
                  <Grid item key={element.id}>
                    <CustomCard
                      id={element.id}
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
