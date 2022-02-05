import React from 'react'
import { useState, useEffect } from 'react'
// import { GetPublicHandle } from '../../Services/publicApiService'
import { Stack as Grid } from '@mui/material'
import CustomCard from './../Card/CustomCard'
import { SkeletonArticle } from './../Skeleton/SkeletonArticle'

const NewsList = () => {
//   const [data, setData] = useState('')

//   const url = process.env.REACT_APP_API_NEWS_GET

//   const resp = GetPublicHandle(url)

//   useEffect(() => {
//     if (resp) {
//       const { data } = resp
//       setData(data)
//     }
//   }, [resp])

  return ( <h1>Prueba</h1>
    // <>
    //   {!data ? (
    //     <SkeletonArticle />
    //   ) : (
    //     <>
    //       {' '}
    //       <h1>Novedades</h1>
    //       <Grid
    //         container="true"
    //         spacing={{ xs: 2, md: 3 }}
    //         columns={{ xs: 4, sm: 8, md: 12 }}
    //         direction={{ xs: 'column', md: 'row' }}
    //       >
    //         {data?.length > 0 ? (
    //           data?.map((element) => {
    //             return (
    //               <Grid item="true" xs={2} sm={4} md={4} key={element.id}>
    //                 <CustomCard
    //                   image={element.image}
    //                   name={element.name}
    //                   description={element.content}
    //                 />
    //               </Grid>
    //             )
    //           })
    //         ) : (
    //           <p>No hay novedades</p>
    //         )}
    //       </Grid>
    //     </>
    //   )}
    // </>
  )
}

export default NewsList


// TODO: REFACTOR