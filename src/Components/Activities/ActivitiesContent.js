import { useEffect } from 'react'
import { React, useState } from 'react'
import parse from 'html-react-parser'
import getActivities from './../../Services/getActivities';




const ActivitiesContent = () => {
  const [infoActivities] = useState([])
const [data, setData] = useState()
  useEffect(() => {
      getActivities().then((res) => setData(res.data.data))
      }, [])
console.log(data)
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
