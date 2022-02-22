import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
/*import SlidesList from '../BackOffice/Slidelist'*/
import { getOrganization } from './../../Services/apiServices/organizationApiService'
import { alertServiceError } from '../AlertService'
import Spinner from '../Spinner'

function Index() {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState()

  useEffect(
    () =>
      (async () => {
        setLoader(true)
        const response = await getOrganization()
        if (response.error) {
          alertServiceError(
            response.message,
            'No se pudo obtener la información solicitada',
          )
        }

        const organizationData = response.data?.data
        organizationData
          ? setData(organizationData)
          : alertServiceError(
              'No se pudo cargar la pagina',
              'Verificá que la URL sea correcta',
            )
        setLoader(false)
      })(),
    [],
  )
  return loader ? (
    <Spinner />
  ) : (
    <div>
      <Container>
        {data ? <h1>{data.welcome_text}</h1> : null}
        {/* <SlidesList/> */}
        <h1>Bienvenidos</h1>
        <h2>@Somosmás</h2>
        <h2>Testimonios</h2>
        <h4>Aquí iran las cards de testimonial.js</h4>
        <h1>Bienvenidos</h1>
        <h2>@Somosmás</h2>
        <h2>Testimonios</h2>
        <h4>Aquí iran las cards de testimonial.js</h4>
        <h1>Bienvenidos</h1>
      </Container>
    </div>
  )
}

export default Index
