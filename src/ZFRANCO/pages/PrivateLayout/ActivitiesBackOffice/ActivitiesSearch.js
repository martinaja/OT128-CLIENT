import { useEffect, useState } from 'react'

import { Box, InputAdornment, TextField } from '@mui/material'

import { debounce } from 'lodash'

import { Spinner } from '../../../components/Spinner/Spinner'

import { useDispatch, useSelector } from 'react-redux'
import {
  searchActivitie,
  getActivities,
  setLoading,
} from '../../../redux/reducers/activitiesReducer/activitiesReducer'

export const ActivitiesSearch = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.activities.loading)

  const [error, setError] = useState(false)

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getActivities())
  }, [dispatch])

  const handleChange = debounce((value) => {
    dispatch(setLoading(true))
    value.length < 3 ? setError(true) : setError(false)
    if (value.length >= 3) {
      dispatch(searchActivitie(value))
    } else {
      dispatch(getActivities())
    }
  }, 500)

  return (
    <Box display="flex" justifyContent="center">
      <TextField
        error={error}
        helperText={error ? 'Ingrese al menos 3 caracteres' : ''}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {isLoading && <Spinner />}
            </InputAdornment>
          ),
        }}
        sx={{
          m: 2,
          width: '50%',
        }}
        label="Busca Actividad"
        name="title"
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  )
}
