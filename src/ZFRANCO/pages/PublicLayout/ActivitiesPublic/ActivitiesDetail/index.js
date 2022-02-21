import React, { useEffect, useState } from 'react'

import { Typography } from '@mui/material'

import { getActivity } from '../../../../../Services/apiServices/activitiesApiService'

import { alertServiceError } from '../../../../services/AlertService/AlertService'

import { Title } from '../../../../components/Title/Title'
import { SkeletonArticle } from '../../../../components/Skeleton/SkeletonArticle'

import { useLocation, useParams } from 'react-router-dom'

export const ActivitiesDetail = (props) => {
  const [data, setData] = useState('')
  const [loader, setLoader] = useState(false)

  let location = useLocation()

  const { actsId } = useParams()

  useEffect(() => {
    setLoader(true)
    ;(async () => {
      const response = await getActivity(actsId)
      if (response.error) {
        alertServiceError(
          response.message,
          'No se encontró la actividad solicitada, porfavor intente nuevamente',
        )
        location('/actividades')
      }

      const activityData = response.data?.data
      activityData
        ? setData(activityData)
        : alertServiceError(
            'No se pudo cargar la actividad',
            'Verificá que la URL sea correcta',
          ) && location('/actividades')
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
