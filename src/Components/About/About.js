import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import { getOrganization } from './../../Services/apiServices/organizationApiService'
import { alertServiceError } from '../AlertService'
import Spinner from '../Spinner'

const About = ({ title }) => {
  const [loader, setLoader] = useState(false)
  const [data, setData] = useState()

  useEffect(
    () =>
      (async () => {
        setLoader(true)
        const response = await getOrganization()
        console.log(response)
        if (response.error) {
          alertServiceError(
            response.message,
            'No se pudo obtener la información solicitada',
          )
        }

        const organizationData = response.data?.data
        console.log(organizationData)
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
    <Container>
      {data ? data.name : null}
      <div>
        <h2>Sobre nosotros</h2>
        {/* <p>{organization?.long_description}</p> */}
      </div>
    </Container>
  )
}

export default About
