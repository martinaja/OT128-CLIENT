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
          const organizationData = request?.data
          console.log('data', organizationData)
          if (organizationData) setOrganization(organizationData)
        } catch (e) {
          console.log(e)
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
      <h1>Sobre nosotros</h1>
      <section id="long_description">{organization?.long_description}</section>
    </Container>
  )
}
