import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPublicActivities } from '../../features/activities/activitiesReducer'
import '../CardListStyles.css'
import parse from 'html-react-parser'

const ActivitiesList = () => {
  const activities = useSelector((state) => state.activities.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPublicActivities())
  }, [dispatch])

  return (
    <div>
      <Typography variant="h3" textAlign="center">
        Listado Actividades
      </Typography>
      <Grid
        container
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
      >
        {activities.length > 0 ? (
          activities.map((activity) => {
            return (
              <Grid item xs="auto" key={activity.id}>
                <Card
                  sx={{
                    maxWidth: 330,
                    minWidth: 330,
                    background: 'rgba(255,255,255,0.6)',
                    boxShadow: 3,
                    m: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={activity.image}
                    alt={activity.name}
                  />
                  <CardContent>
                    <Typography
                      textAlign="center"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {activity.name}
                    </Typography>
                    <Typography
                      textAlign="center"
                      component={'span'}
                      variant={'body2'}
                      color="text.secondary"
                    >
                      {activity.description === null
                        ? null
                        : parse(String(activity.description))}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        ) : (
          <p>No hay actividades</p>
        )}
      </Grid>
    </div>
  )
}

export default ActivitiesList
