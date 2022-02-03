import { useEffect } from 'react'
import { React, useState } from 'react'
import axios from 'axios'
import parse from 'html-react-parser'




const ActivitiesContent = () => {
  const [infoActivities, setInfoActivities] = useState([])

  useEffect(() => {
    axios
      .get('http://ongapi.alkemy.org/api/activities')
      .then((res) => setInfoActivities(res.data.data))
      .catch((err) => console.log(err))
  }, [])

  const activitiesArray = infoActivities.map(
    (singleActivity) => singleActivity.description,
  )

  console.log(activitiesArray)

  return activitiesArray.map((singleRender) =>  

  {if (!singleRender) {
    return (null)
   }
  else 
  {
  return <h4>{parse(singleRender)}</h4>}}
  )  
}
export default ActivitiesContent
