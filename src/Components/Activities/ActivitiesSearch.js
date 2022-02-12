import { TextField } from '@mui/material'
import { useEffect, useState } from 'react'

export const ActivitiesSearch = () => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(search)
  }, [search])

  return (
    <TextField
      label="Busca Actividad"
      name="title"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}
