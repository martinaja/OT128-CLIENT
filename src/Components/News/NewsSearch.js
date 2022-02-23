import React, { useState } from 'react'
import { debounce } from 'lodash'
import './NewsSearch.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNew, fetchSearchNews } from '../../features/news/newsReducer'
import { Typography } from '@mui/material'

const NewsSearch = function () {
  const dispatch = useDispatch()

  const handleInput = debounce((val) => {
    if (val.length >= 3) {
      const query = {
        name: val,
        category: '',
      }
      dispatch(fetchSearchNews(query))
    } else {
      dispatch(fetchNew())
    }
  }, 450)

  return (
    <div className="search">
      <Typography variant="h5" gutterBottom component="div">
        Buscar novedad por nombre
      </Typography>
      <input
        type="text"
        placeholder="Buscar titulo"
        className="search-input"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default NewsSearch
