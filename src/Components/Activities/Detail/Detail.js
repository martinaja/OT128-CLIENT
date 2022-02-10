import React from 'react'
import { Title } from '../../Title'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { SkeletonArticle } from './../../Skeleton/SkeletonArticle'
import { getActivity } from '../../../Services/apiServices/activitiesApiService'
import { alertServiceError } from '../../AlertService'
import { useHistory } from 'react-router-dom'

export const Detail = (props) => {
  const [data, setData] = useState(undefined)
  const [loader, setLoader] = useState(false)
  const history = useHistory()

  const {
    match: { params },
  } = props

  const { id } = params

  useEffect(() => {
    setLoader(true)
    ;(async () => {
      const response = await getActivity(id)
      if (response.error) {
        alertServiceError(
          response.message,
          'No se encontró la actividad solicitada, porfavor intente nuevamente',
        )
        history.push('/activities')
      }

      const activityData = response.data?.data
      activityData
        ? setData(activityData)
        : alertServiceError(
            'No se pudo cargar la actividad',
            'Verificá que la URL sea correcta',
          ) && history.push('/activities')
      setLoader(false)
    })()
  }, [])

  return (
    <>
      {!loader ? (
        <>
          <Title children={data?.name} image={data?.image} />
          <Typography
            component={'span'}
            variant={'body2'}
            color="text.secondary"
          >
            {data?.description}
          </Typography>
        </>
      ) : (
        <SkeletonArticle />
      )}
    </>
  )
}
