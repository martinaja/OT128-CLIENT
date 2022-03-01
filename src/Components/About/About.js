import React, { useEffect, useState } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { getOrganization } from './../../Services/apiServices/organizationApiService'
import { alertServiceError } from '../AlertService'
import Spinner from '../Spinner'
import { MembersList } from '../Members/MembersList'
import { LinkedinFollowCompany } from 'react-social-plugins'
import { Helmet } from 'react-helmet'

const About = ({ title }) => {
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
    <>
      <Helmet>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        />
        <script
          src="https://platform.linkedin.com/in.js"
          type="text/javascript"
        >
          lang: es_AR
        </script>
      </Helmet>
      <img src="images/nosotros.png" width="100%" alt="nosotros" />
      <Container style={{ textAlign: 'center' }}>
        {/* <Title>Nosotros</Title> */}
        {/* <Box>
        </Box> */}
        <Grid container sx={{ my: '60px', width: '100%' }}>
          <Grid item sx={12} md={9}>
            <Box sx={{ textAlign: 'start', px: '30px' }}>
              <LinkedinFollowCompany
                companyId={3144678}
                counter="top"
                lang="es_AR"
              />
              <h3 style={{ margin: '15px 0' }}>{data?.welcome_text}</h3>
              {/* <p style={{ margin: '35px 0' }}>{data?.long_description}</p> */}
              <ul>
                <li>
                  <b>Nosotros</b>
                </li>
                <p style={{ margin: '15px 0' }}>
                  Desde 1997 en Somos Más trabajamos con los chicos y chicas,
                  mamás y papás, abuelos y vecinos del barrio La Cava generando
                  procesos procesos de crecimiento y de inserción social.
                  Uniendo las manos de todas las familias, las que vivien en el
                  barrio y las que viven fuera de él, es que podemos pensar,
                  crear y garantizar estos procesos. Somos una asociación sin
                  fines de lucro que se creó en 1997 con la intención de dar
                  alimentos a las familias del barrio. Con el tiempo fuimos
                  involucrándonos con la comunidad y agrandando y mejorando
                  nuestra capacidad de trabajo. Hoy somos un centro comunitario
                  que acompaña a más de 700 personas a través de las áreas de:
                  Educación, deportes, primera infancia, salud, alimentación y
                  trabajo social.
                </p>
                <li>
                  <b>Visión</b>
                </li>
                <p style={{ margin: '15px 0' }}>
                  Mejorar la calidad de ida de niños y familias en situación de
                  vulnerabilidad en el barrio La Cava, otorgando un cambio de
                  rumbo en cada individuo a través de la educación, salud,
                  deporte, responsabilidad y compromiso
                </p>
                <li>
                  <b>Misión</b>
                </li>
                <p style={{ margin: '15px 0' }}>
                  Trabajar articuladamente con los distintos aspectos de la vida
                  de las familias, generando espacios de desarrollo personal y
                  familiar, brindando herramientas que logren mejorar la calidad
                  de vida a través de su propio esfuerzo.
                </p>
              </ul>
            </Box>
          </Grid>
          <Grid item sx={12} md={3}>
            <div style={{ padding: '25px', margin: 'auto' }}>
              <a
                className="twitter-timeline"
                data-lang="es"
                // data-width="1000"
                data-height="600"
                data-dnt="true"
                data-theme="light"
                href="https://twitter.com/somosmas?ref_src=twsrc%5Etfw"
              >
                Tweets by somosmas
              </a>{' '}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script>
            </div>
          </Grid>
        </Grid>
        <MembersList />
      </Container>
    </>
  )
}

export default About
