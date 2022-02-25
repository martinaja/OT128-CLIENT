import React from 'react'
import { debounce } from 'lodash'
import './NewsSearch.css'
import { useDispatch } from 'react-redux'
import { fetchNew, fetchSearchNews } from '../../features/news/newsReducer'
import { TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

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
      <TextField
        id="filled-basic"
        label="Buscar título"
        variant="filled"
        onChange={(e) => handleInput(e.target.value)}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
    </div>
  )
}

export default NewsSearch
