import React from 'react'
import ActivitieContent from '../Activities/ActivitiesContent';
import NewsList from '../News/NewsList'

function Index() {
  return (
    <div>
      <h1>Bienvenidos</h1>
      <h2>@Somosmás</h2>
      <NewsList/>
      <ActivitieContent/>
      <h2>Testimonios</h2>
      <h4>Aquí iran las cards de testimonial.js</h4>
    </div>
  )
}

export default Index;
