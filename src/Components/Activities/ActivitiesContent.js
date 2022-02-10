import { useEffect } from 'react'
import { React, useState } from 'react'
import parse from 'html-react-parser'
import { getActivity } from '../../Services/apiServices/activitiesApiService'
import { alertServiceError } from '../AlertService'

const ActivitiesContent = () => {
  const [infoActivities, setInfoActivities] = useState([])

  useEffect(() => {
    getActivity().then((res) => setInfoActivities(res.data.data))
  }, [])

  const activitiesArray = infoActivities.map(
    (singleActivity) => singleActivity.description,
  )

  useEffect(() => {
    if (infoActivities?.error)
      alertServiceError('Error', infoActivities.message)
  }, [infoActivities])

  return activitiesArray.map((singleRender) => {
    if (!singleRender) {
      return null
    } else {
      return <h4>{parse(singleRender)}</h4>
    }
  })
}
export default ActivitiesContent
