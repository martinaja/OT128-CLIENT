import { Box, InputAdornment, TextField } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounce } from 'lodash'
import Spinner from '../Spinner'
import { fetchMember, search } from '../../features/members/membersReducer'

export const MemberSearch = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.members.loader)
  const [error, setError] = useState(false)

  const handleChange = debounce((value) => {
    value.length < 2 ? setError(true) : setError(false)
    if (value.length >= 2) {
      dispatch(search(value))
    } else {
      dispatch(fetchMember())
    }
  }, 500)

  return (
    <Box display="flex" justifyContent="center">
      <TextField
        error={error}
        helperText={error ? 'Ingrese al menos 2 caracteres' : ''}
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
        label="Buscar Miembro"
        name="miembro"
        onChange={(e) => handleChange(e.target.value)}
      />
    </Box>
  )
}
