import React from 'react'
import FooterGlobal from '../Footer/FooterGlobal';
import NewsList from '../News/NewsList'


function Index() {
  return (
    <div>
      <h1>Bienvenidos</h1>
      <h2>@Somosmás</h2>
      <NewsList/>
      <h2>Testimonios</h2>
      <h4>Aquí iran las cards de testimonial.js</h4>
    <FooterGlobal/>
    </div>
    
  )
}

export default Index;
