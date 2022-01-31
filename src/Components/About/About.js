import React, { useEffect, useState } from 'react'
import { Container } from '@mui/material'
import getOrganization from '../../Services/getOrganizationData'

export default function About({ title }) {
  const [organization, setOrganization] = useState(null)
  const [loader, setLoader] = useState(false)

  useEffect(
    () =>
      (async () => {
        try {
          setLoader(true)
          const request = await getOrganization()
          if (request.success) setOrganization(request.data)
        } catch (e) {
          console.error(e)
          // Insert alert
        } finally {
          setLoader(false)
        }
      })(),
    [],
  )
  return loader ? (
    'cargando...'
  ) : (
    <Container>
      {/* <Title>{title}</Title> When Title component exists */}
      <div>
        <h2>Sobre nosotros</h2>
        <p id="long_description">{organization?.long_description}</p>
      </div>
    </Container>
  )
}
