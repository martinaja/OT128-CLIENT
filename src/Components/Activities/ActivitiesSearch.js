import { Box, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

export const ActivitiesSearch = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

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
        onChange={(e) => setSearch(e.target.value)}
      />
    </Box>
  )
}
