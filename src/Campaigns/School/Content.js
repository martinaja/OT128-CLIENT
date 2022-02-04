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
  // const theme = createTheme({
  //   breakpoints: {
  //     values: {
  //       xs: 0,
  //       sm: 450,
  //       md: 600,
  //       lg: 900,
  //       xl: 1200,
  //     },
  //   },
  // })
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200,
        smartTv: 1500,
      },
    },
  })

  const isMatchTablet = useMediaQuery(theme.breakpoints.up('tablet'))
  const isMatchLaptop = useMediaQuery(theme.breakpoints.up('laptop'))
  const isMatchDesktop = useMediaQuery(theme.breakpoints.up('desktop'))
  const isTV = useMediaQuery(theme.breakpoints.up('smartTv'))

  return (
    <Grid
      container
      spacing={1}
      style={{ background: isTV && 'rgba(7, 34, 39, .1)' }}
    >
      <Grid style={{ border: '1px dotted red' }} item xs={12}>
        Fecha, hora, lugar del evento
      </Grid>
      <Grid
        style={{ border: '1px dotted red', padding: '20px' }}
        item
        xs={12}
        lg={5}
      >
        <main>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt posuere vehicula. Curabitur nec auctor tortor. Donec nec
            suscipit enim, et congue felis. Integer non commodo metus. Donec
            finibus, eros nec volutpat tincidunt, nibh sem bibendum libero, in
            ultricies sem risus non nibh. Proin dictum, arcu dapibus tincidunt
            viverra, nibh nunc pharetra nibh, a mattis tellus elit eu purus.
            Vivamus eget sollicitudin ipsum. Suspendisse eget sem pellentesque,
            gravida nisi vel, gravida neque. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. Quisque semper tellus dolor, tincidunt
            gravida augue volutpat non. Vestibulum dapibus non massa vitae
            mollis. Integer et nisl quis diam commodo elementum. Cras in mauris
            purus. Pellentesque iaculis est in justo suscipit, eu dignissim
            mauris ultrices. Fusce molestie ornare orci.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nunc rhoncus ligula id nibh aliquam, ac
            rutrum tortor pellentesque. Donec quis mi tempus, tempus nulla quis,
            scelerisque erat. Pellentesque eu gravida risus. Vestibulum sed
            pellentesque nisl. Donec ut nisl quis mauris iaculis molestie.
            Vivamus at turpis sodales, commodo risus eu, venenatis libero. Nulla
            eget dapibus mauris, a porta lacus. Vestibulum a tincidunt nulla.
            Duis a rutrum elit. Fusce metus eros, porta sit amet viverra a,
            aliquet sit amet ipsum.
          </p>
        </main>
      </Grid>
      {isMatchLaptop && (
        <Grid
          style={{ border: '1px dotted red', padding: '20px' }}
          item
          xs={12}
          lg={7}
        >
          {/* Hide on mobile & tablet */}
          <section id="gallery">
            <Box boxShadow={5} sx={{ p: 1 }} mb={4}>
              <img width="100%" src="/images/blog-img-02.jpg" alt="" />
            </Box>
            <Box boxShadow={5} sx={{ p: 1 }}>
              <img width="100%" src="/images/blog-img-02.jpg" alt="" />
            </Box>
            {/* <img width="100%" src="/images/blog-img-02.jpg" alt="" /> */}
          </section>
        </Grid>
      )}
      {isMatchTablet && (
        <Grid style={{ border: '1px dotted red' }} item xs={12}>
          <Timer dateFromApi="2022-03-02T00:00:00.000000Z" />
        </Grid>
      )}
    </Grid>
    // <Container
    // // style={{
    // //   background: isMatchDesktop ? '' : 'rgb(7,34,39)',
    // // }}
    // >
    //   <Box>
    //     <main>
    //       <p>
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
    //         tempor eu lacus quis scelerisque. Suspendisse placerat sed neque et
    //         convallis. Fusce volutpat dui quis cursus finibus. Integer nulla
    //         est, vestibulum vel dignissim et, tristique eu ante. Suspendisse
    //         bibendum, nisl ut efficitur luctus, justo est imperdiet felis, ac
    //         blandit nisl turpis vel purus. Nullam erat tortor, dictum in eros
    //         ut, faucibus laoreet lorem. Aliquam tincidunt a sem et tristique.
    //         Aliquam sollicitudin, turpis et congue scelerisque, tellus felis
    //         molestie turpis, a ultrices risus arcu ac justo. Vestibulum non
    //         tempor dui, sit amet bibendum nisi.
    //         <p>
    //           Vivamus pulvinar sapien sit amet nulla volutpat, eu finibus neque
    //           dapibus. Nam at diam eros. Maecenas eleifend justo sed enim tempor
    //           luctus. Donec vitae tempus metus. Cras dapibus semper tristique.
    //           Vestibulum id enim in lectus dignissim rutrum ac sit amet ante.
    //           Pellentesque pharetra eros neque, vel lobortis urna vulputate ac.
    //           Integer quis sodales quam. Mauris dignissim urna et mi auctor
    //           feugiat. Suspendisse feugiat pharetra quam rhoncus mattis. Nam et
    //           mi gravida, rutrum diam eget, aliquam erat. Praesent sed finibus
    //           sem, ut pellentesque tellus. Fusce placerat sit amet odio non
    //           sollicitudin. Sed gravida ultrices purus placerat placerat.
    //         </p>
    //         <p>
    //           Praesent viverra ligula a vehicula lobortis. Sed lectus turpis,
    //           maximus sed tincidunt nec, vehicula non dolor. Suspendisse
    //           dignissim urna sed velit porttitor tincidunt. Curabitur turpis
    //           mauris, posuere nec mi at, suscipit elementum metus. Proin euismod
    //           diam sed lacus dignissim, at feugiat eros tincidunt. Aenean
    //           tincidunt, quam sit amet molestie viverra, arcu tortor tristique
    //           tortor, quis blandit neque orci sed turpis. Aliquam tristique eget
    //           risus et bibendum. Suspendisse dui dui, scelerisque non
    //           condimentum vel, vulputate vel sapien. Sed egestas viverra quam,
    //           vel vehicula ligula vehicula a. Lorem ipsum dolor sit amet,
    //           consectetur adipiscing elit. Maecenas luctus mi et tempor pretium.
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //         </p>
    //         <p>
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
    //           neque et lectus iaculis laoreet. Quisque bibendum tristique
    //           elementum. Praesent nec sapien dolor. Nullam porttitor pulvinar
    //           luctus. Ut dapibus turpis ut eleifend gravida. Ut lorem dui,
    //           feugiat sit amet nisl at, congue faucibus sem. Fusce lacinia
    //           vulputate fringilla. Fusce hendrerit massa et mauris lacinia
    //           pellentesque. Pellentesque leo nisi, rhoncus id sodales eu,
    //           aliquet in felis.
    //         </p>
    //       </p>
    //       <p>Fecha, hora y lugar</p>
    //     </main>
    //   </Box>
    // {isMatchLaptop && (
    //   <Box>
    //     {/* Hide on mobile & tablet */}
    //     <section id="gallery">
    //       <p>Imágenes</p>
    //     </section>
    //   </Box>
    // )}
    //   {isMatchTablet && (
    //     <Box>
    //       {/* Hide on mobile */}
    //       <section id="countdown">
    //         <Timer dateFromApi="2022-03-02T00:00:00.000000Z" />
    //       </section>
    //     </Box>
    //   )}
    // </Container>
  )
}

export default Content
