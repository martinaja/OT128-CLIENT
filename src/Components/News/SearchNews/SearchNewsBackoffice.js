import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alertServiceError } from '../../AlertService'
import { debounce } from 'lodash'
import { Box, MenuItem, TextField } from '@mui/material'
import { fetchNew, fetchSearchNews } from '../../../features/news/newsReducer'
import SearchIcon from '@mui/icons-material/Search'
import { getCategory } from '../../../features/categories/categoriesReducer'

export default function SearchNewsBackoffice() {
  const dispatch = useDispatch()
  const newsState = useSelector((state) => state.news)
  const { allCategories, status: categoriesStatus } = useSelector(
    (state) => state.categories,
  )
  const [querySearch, setQuerySearch] = useState({
    name: '',
    category: '',
  })

  // Get categories
  useEffect(() => {
    if (categoriesStatus === 'idle' || categoriesStatus === 'delete')
      dispatch(getCategory())

    if (categoriesStatus === 'error')
      alertServiceError(
        categoriesStatus.errorMsg,
        'Se produjo un error al intentar obtener las categorías',
      )
  }, [dispatch, categoriesStatus])

  // Get news in case delete them or error
  useEffect(() => {
    if (newsState.status === 'delete') {
      dispatch(fetchNew())
    }

    if (newsState.status === 'error') {
      alertServiceError(
        newsState.errorMsg,
        'Se produjo un error al intentar obtener las noticias',
      )
    }
  }, [newsState.status, dispatch, newsState.errorMsg])

  // Filter news
  useEffect(() => {
    if (querySearch.name?.length === 0) {
      dispatch(fetchNew())
    }

    if (querySearch.name?.length < 3 && querySearch.category !== '') return

    debounce(() => {
      if (querySearch.name?.length >= 3) {
        dispatch(fetchSearchNews(querySearch))
      } else if (querySearch.name?.length > 0 && querySearch.name?.length < 3) {
        dispatch(fetchNew())
      }
    }, 450)()
  }, [querySearch, dispatch])

  const handleInput = (e) => {
    setQuerySearch({
      ...querySearch,
      [e.target.name]: e.target.value,
    })
  }

  console.log('render')

  return (
    <Box>
      <form>
        <TextField
          label="Buscar"
          fullWidth
          name="name"
          placeholder="Ingresá un título"
          InputProps={{
            startAdornment: <SearchIcon />,
          }}
          onChange={handleInput}
        />
        <TextField
          margin="normal"
          fullWidth
          name="category"
          select
          label="Seleccior categoría (opcional)"
          onChange={handleInput}
          defaultValue=""
        >
          <MenuItem value="">Todas</MenuItem>
          {allCategories.map((cat, i) => (
            <MenuItem key={i} value={cat.id}>
              {cat.name}-{cat.id}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </Box>
  )
}
