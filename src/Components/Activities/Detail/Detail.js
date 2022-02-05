import React from 'react'
// import { getHandler } from '../../../Services/BaseHTTP/publicApiService'
import { Title } from '../../Title'
import { Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { SkeletonArticle } from './../../Skeleton/SkeletonArticle'

export const Detail = (props) => {
//   const [data, setData] = useState('')

//   const url = process.env.REACT_APP_API_ACTIVITY_GET

//   const {
//     match: { params },
//   } = props

//   const { id } = params

//   const resp = getHandler(url, id)

//   useEffect(() => {
//     if (resp) {
//       const { data } = resp
//       setData(data)
//     }
//   }, [resp])

  return ( <h1>Prueba</h1>
    // <>
    //   {resp ? (
    //     <>
    //       <Title children={data?.name} image={data?.image} />
    //       <Typography
    //         component={'span'}
    //         variant={'body2'}
    //         color="text.secondary"
    //       >
    //         {data?.description}
    //       </Typography>
    //     </>
    //   ) : (
    //     <SkeletonArticle />
    //   )}
    // </>
  )
}


// TODO: REFACTOR