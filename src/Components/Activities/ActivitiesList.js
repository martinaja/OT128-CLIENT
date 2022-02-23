import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPublicActivities } from '../../features/activities/activitiesReducer'
import '../CardListStyles.css'
import parse from 'html-react-parser'
import { useBreakPoints } from '../../utils/hooks/useBreakPoints'

const ActivitiesCard = ({ name, image, description, isMin }) => {
  let minWidth = isMin ? 400 : 330

  return (
    <Card
      sx={{
        minWidth: minWidth,
        maxWidth: minWidth,
        background: 'rgba(255,255,255,0.6)',
        boxShadow: 3,
        m: 3,
      }}
    >
      <CardMedia component="img" height="300" image={image} alt={name} />
      <CardContent>
        <Typography
          textAlign="center"
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
        <Typography
          textAlign="center"
          component={'span'}
          variant={'body2'}
          color="text.secondary"
        >
          {description === null ? null : parse(String(description))}
        </Typography>
      </CardContent>
    </Card>
  )
}

const ActivitiesList = () => {
  const activities = useSelector((state) => state.activities.data)
  const dispatch = useDispatch()

  const isMatchMin = useBreakPoints('(max-width: 694px)')
  const isMatchRest = useBreakPoints('(min-width: 695px)')

  useEffect(() => {
    dispatch(getPublicActivities())
  }, [dispatch])

  return (
    <>
      <Typography variant="h3" textAlign="center" mt={5}>
        Actividades
      </Typography>
      <Typography variant="body1" textAlign="center" p={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
        blanditiis enim ipsa nemo asperiores illo, perspiciatis ratione rem non
        corporis itaque, ea reiciendis dolorem doloribus expedita vero
        necessitatibus quasi magni?
      </Typography>
      {isMatchMin && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {activities.length > 0 ? (
            activities.map((activity, index) => {
              return (
                <ActivitiesCard
                  name={activity.name}
                  image={activity.image}
                  description={activity.description}
                  isMin={true}
                  key={index}
                />
              )
            })
          ) : (
            <p>No hay actividades</p>
          )}
        </div>
      )}

      {isMatchRest && (
        <div
          style={{
            display: 'grid',
            alignContent: 'center',
            alignItems: 'center',
            justifyItems: 'center',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          }}
        >
          {activities.length > 0 ? (
            activities.map((activity, index) => {
              return (
                <ActivitiesCard
                  name={activity.name}
                  image={activity.image}
                  description={activity.description}
                  isMin={false}
                  key={index}
                />
              )
            })
          ) : (
            <p>No hay actividades</p>
          )}
        </div>
      )}
    </>
  )
}

export default ActivitiesList
