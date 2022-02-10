import { useEffect } from 'react'
import { React, useState } from 'react'
import parse from 'html-react-parser'
import { getActivity } from '../../Services/apiServices/activitiesApiService'
import { alertServiceError } from '../AlertService'
import Spinner from '../Spinner'

const ActivitiesContent = () => {
  const [infoActivities, setInfoActivities] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    ;(async () => {
      const response = await getActivity()
      if (response.error) {
        alertServiceError(
          response.message,
          'Hubo un problema al obtener las actividades, porfavor intente nuevamente',
        )
      }
      const activitiesData = response.data?.data
      activitiesData
        ? setInfoActivities(activitiesData)
        : alertServiceError(
            'Hubo un problema al cargar actividades',
            'Verificá que la URL sea correcta',
          )
      setLoader(false)
    })()
  }, [])

  const activitiesArray = infoActivities.map(
    (singleActivity) => singleActivity.description,
  )

  // useEffect(() => {
  //   if (infoActivities?.error)
  //     alertServiceError('Error', infoActivities.message)
  // }, [infoActivities])

  return activitiesArray.map((singleRender) => {
    if (!singleRender) {
      return loader ? <Spinner /> : null
    } else {
      return loader ? <Spinner /> : <h4>{parse(singleRender)}</h4>
    }
  })
}
export default ActivitiesContent
