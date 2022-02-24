import React from 'react'
import { useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import CustomCard from './../Card/CustomCard'
import { SkeletonArticle } from './../Skeleton/SkeletonArticle'
import { alertServiceError } from '../AlertService'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNew } from '../../features/news/newsReducer'

const NewsList = ({ from }) => {
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

  let sliceNews
  switch (from) {
    case 'home':
      sliceNews = state.news?.length - 3
      break
    case 'newsHome':
      sliceNews = state.news?.length
      break
    default:
      break
  }

  return (
    <>
      {state.loader ? (
        <SkeletonArticle />
      ) : (
        <>
          {' '}
          <Box sx={{ pb: 4, textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom component="div">
              Todas las novedades
            </Typography>
          </Box>
          <Grid
            sx={{
              justifyContent: 'space-evenly',
              // border: 1,
              // borderRadius: 4,
              backgroundColor: 'white',
              boxShadow: 2,
              py: 2,
              // borderColor: 'rgb(53, 133, 139)',
            }}
            container
            rows={{ xs: 1, sm: 8, md: 6 }}
            spacing={{ xs: 2, md: 3 }}
          >
            {state.news?.length ? (
              state.news?.slice(sliceNews).map((element) => {
                return (
                  <Grid item key={element.id}>
                    <CustomCard
                      id={element.id}
                      image={element.image}
                      name={element.name}
                      description={element.content}
                      link="novedades"
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

export default NewsList
