import { Box, Container } from '@mui/material'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Controller, Scene } from 'react-scrollmagic'
import { alertServiceError } from '../AlertService'
import Spinner from '../Spinner'
import { Title } from '../Title'
import parse from 'html-react-parser'
import { Tween, Timeline } from 'react-gsap'
import { getActivity } from '../../Services/apiServices/activitiesApiService'

export default function ActivityDetail() {
  const { id } = useParams()
  const history = useHistory()
  const [loader, setLoader] = useState(false)
  const [activity, setActivity] = useState(null)

  useEffect(
    () =>
      (async () => {
        setLoader(true)
        const requestActivity = await getActivity(id)
        console.log(requestActivity.data.data)
        if (requestActivity.error) {
          alertServiceError(
            requestActivity.message,
            'No se pudo obtener la información solicitada',
          )
          history.push('/')
        }

        const activityData = requestActivity.data?.data
        activityData
          ? setActivity(activityData)
          : alertServiceError(
              'No se pudo cargar el testimonio',
              'Verificá que la URL sea correcta',
            ) && history.push('/')

        setLoader(false)
      })(),
    [id, history],
  )

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <Container sx={{ mt: 4 }}>
          <Controller>
            <Scene duration={600} triggerHook={0.5} offset={225}>
              <Box sx={{ flexDirection: 'column' }}>
                <Box
                  component="span"
                  sx={{ fontSize: 16, mt: 1, display: 'flex' }}
                >
                  <small>
                    <strong>
                      {activity &&
                        new Date(activity.updated_at).toLocaleDateString(
                          'es-AR',
                        )}
                    </strong>
                  </small>
                </Box>

                <Title image={activity?.image}>{activity?.name}</Title>

                <Box sx={{ my: 5 }}>
                  {activity &&
                    parse(
                      activity.content
                        ? activity.content
                        : 'no se proporcionó descripción',
                    )}
                </Box>
              </Box>
            </Scene>
            <h2>Comentarios</h2>
            <Scene
              duration={500}
              triggerHook={0.75}
              pin={{ pushFollowers: true }}
              offset={125}
            >
              {(progress) => (
                <Box>
                  <Timeline totalProgress={progress} paused>
                    <Timeline
                      target={
                        <p>
                          {activity &&
                            String(activity.content) &&
                            'No hay comentarios'}
                        </p>
                      }
                    >
                      <Tween from={{ opacity: -1 }} to={{ opacity: 1 }} />
                    </Timeline>
                  </Timeline>
                </Box>
              )}
            </Scene>
          </Controller>
        </Container>
      )}
    </>
  )
}
