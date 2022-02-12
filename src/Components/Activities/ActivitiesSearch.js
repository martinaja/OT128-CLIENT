import { Box, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  searchActivitie,
  fetchActivities,
} from '../../features/activitiesReducer'

export const ActivitiesSearch = () => {
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value)
    if (e.target.value.length >= 3) {
      setLoading(true)
      dispatch(searchActivitie(search))
      setLoading(false)
    } else {
      setLoading(true)
      dispatch(fetchActivities())
      setLoading(false)
    }
  }

  return (
    <Box display="flex" justifyContent="center">
      <TextField
        sx={{
          m: 2,
          width: '50%',
        }}
        label="Busca Actividad"
        name="title"
        value={search}
        onChange={handleChange}
      />
    </Box>
  )
}
