import React, { useEffect } from 'react'

import { Box, Grid } from '@mui/material'

import { CustomCard } from '../../../../components/Card/CustomCard'

import { SkeletonArticle } from '../../../../components/Skeleton/SkeletonArticle'

import { alertServiceError } from '../../../../services/AlertService/AlertService'

import { useDispatch, useSelector } from 'react-redux'
import { fetchNew } from '../../../../redux/reducers/newsReducer/newsReducer'

export const NewsList = () => {
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
              <Box sx={{ mt: 4 }}>
                <p>No hay novedades</p>
              </Box>
            )}
          </Grid>
        </>
      )}
    </>
  )
}
