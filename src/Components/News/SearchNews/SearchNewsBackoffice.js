import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alertServiceError } from '../../AlertService'
import { debounce } from 'lodash'
import { Box, TextField } from '@mui/material'
import { fetchNew, fetchSearchNews } from '../../../features/news/newsReducer'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchNewsBackoffice() {
  const dispatch = useDispatch()
  const newsState = useSelector((state) => state.news)
  const [helper, setHelper] = useState(false)

  useEffect(() => {
    if (newsState.status === 'idle') {
      dispatch(fetchNew())
    }

    if (newsState.status === 'error') {
      alertServiceError(
        newsState.errorMsg,
        'Se produjo un error al intentar obtener las noticias',
      )
    }
  }, [newsState.status, dispatch, newsState.errorMsg])

  const handleInput = debounce((val) => {
    if (val.length >= 3) {
      dispatch(fetchSearchNews(val))
      setHelper(false)
    } else {
      dispatch(fetchNew())
      setHelper(true)
    }
  }, 500)

  return (
    <Box>
      <TextField
        label="Buscar"
        fullWidth
        onChange={(e) => handleInput(e.target.value)}
        defaultValue="Ingresá un título"
        helperText={helper && 'Ingresá al menos tres caracteres'}
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
    </Box>
  )
}
