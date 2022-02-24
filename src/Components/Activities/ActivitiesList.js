import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPublicActivities } from '../../features/activities/activitiesReducer'
import '../CardListStyles.css'
import { useBreakPoints } from '../../utils/hooks/useBreakPoints'
import CustomCard from '../Card/CustomCard'

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
                <CustomCard
                  name={activity.name}
                  image={activity.image}
                  description={activity.description}
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
                <CustomCard
                  id={activity.id}
                  link="activities"
                  name={activity.name}
                  image={activity.image}
                  description={activity.description}
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
