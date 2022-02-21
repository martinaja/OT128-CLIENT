import React from 'react'

import { debounce } from 'lodash'

import { Typography } from '@mui/material'
import styles from './NewsSearch.module.css'

import { useDispatch } from 'react-redux'
import {
  fetchNew,
  fetchSearchNews,
} from '../../../../redux/reducers/newsReducer/newsReducer'

export const NewsSearch = () => {
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
    <div className={styles.search}>
      <Typography variant="h5" gutterBottom component="div">
        Buscar novedad por nombre
      </Typography>
      <input
        type="text"
        placeholder="Buscar titulo"
        className={styles.search__input}
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}
