import {
  Box,
  Container,
  createTheme,
  Grid,
  useMediaQuery,
} from '@material-ui/core'
import React from 'react'
import Timer from '../../Components/Countdown/Timer'

const Content = () => {
  // Breakpoints
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
      },
    },
  })

  const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))

  return (
    <Container
      style={{
        background: isMatchDesktop ? '' : 'rgb(7,34,39)',
      }}
    >
      <Box
        style={{
          background: isMatchDesktop ? '' : 'rgb(7,34,39)',
        }}
      >
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            tempor eu lacus quis scelerisque. Suspendisse placerat sed neque et
            convallis. Fusce volutpat dui quis cursus finibus. Integer nulla
            est, vestibulum vel dignissim et, tristique eu ante. Suspendisse
            bibendum, nisl ut efficitur luctus, justo est imperdiet felis, ac
            blandit nisl turpis vel purus. Nullam erat tortor, dictum in eros
            ut, faucibus laoreet lorem. Aliquam tincidunt a sem et tristique.
            Aliquam sollicitudin, turpis et congue scelerisque, tellus felis
            molestie turpis, a ultrices risus arcu ac justo. Vestibulum non
            tempor dui, sit amet bibendum nisi.
            <p>
              Vivamus pulvinar sapien sit amet nulla volutpat, eu finibus neque
              dapibus. Nam at diam eros. Maecenas eleifend justo sed enim tempor
              luctus. Donec vitae tempus metus. Cras dapibus semper tristique.
              Vestibulum id enim in lectus dignissim rutrum ac sit amet ante.
              Pellentesque pharetra eros neque, vel lobortis urna vulputate ac.
              Integer quis sodales quam. Mauris dignissim urna et mi auctor
              feugiat. Suspendisse feugiat pharetra quam rhoncus mattis. Nam et
              mi gravida, rutrum diam eget, aliquam erat. Praesent sed finibus
              sem, ut pellentesque tellus. Fusce placerat sit amet odio non
              sollicitudin. Sed gravida ultrices purus placerat placerat.
            </p>
            <p>
              Praesent viverra ligula a vehicula lobortis. Sed lectus turpis,
              maximus sed tincidunt nec, vehicula non dolor. Suspendisse
              dignissim urna sed velit porttitor tincidunt. Curabitur turpis
              mauris, posuere nec mi at, suscipit elementum metus. Proin euismod
              diam sed lacus dignissim, at feugiat eros tincidunt. Aenean
              tincidunt, quam sit amet molestie viverra, arcu tortor tristique
              tortor, quis blandit neque orci sed turpis. Aliquam tristique eget
              risus et bibendum. Suspendisse dui dui, scelerisque non
              condimentum vel, vulputate vel sapien. Sed egestas viverra quam,
              vel vehicula ligula vehicula a. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas luctus mi et tempor pretium.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              neque et lectus iaculis laoreet. Quisque bibendum tristique
              elementum. Praesent nec sapien dolor. Nullam porttitor pulvinar
              luctus. Ut dapibus turpis ut eleifend gravida. Ut lorem dui,
              feugiat sit amet nisl at, congue faucibus sem. Fusce lacinia
              vulputate fringilla. Fusce hendrerit massa et mauris lacinia
              pellentesque. Pellentesque leo nisi, rhoncus id sodales eu,
              aliquet in felis.
            </p>
          </p>
          <p>Fecha, hora y lugar</p>
        </main>
      </Box>
      {isMatchLaptop && (
        <Box>
          {/* Hide on mobile & tablet */}
          <section id="gallery">
            <p>Imágenes</p>
          </section>
        </Box>
      )}
      {isMatchTablet && (
        <Box>
          {/* Hide on mobile */}
          <section id="countdown">
            <Timer dateFromApi="2022-03-02T00:00:00.000000Z" />
          </section>
        </Box>
      )}
    </Container>
  )
}

export default Content
