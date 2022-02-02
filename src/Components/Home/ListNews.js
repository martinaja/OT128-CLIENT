import {  Typography } from '@mui/material'
import React from 'react'
import Title from '../../TitlesAndNews/Title'
import NewList from "../News/NewsList"

export const ListNews = () => {
  return (
    <div>
   <Title/>
   <NewList/>
      <Typography>
    Aquí irá la lista de novedades
      </Typography>
    </div>
  )
}
