import React, { useEffect } from 'react'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { alertServiceError } from '../AlertService'
import {
  getUsersThunk,
  searchUsersThunk,
} from '../../features/backofficeUsers/usersReducer'
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'

const InputSearchUsers = function () {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.users)

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch(getUsersThunk())
    }

    if (state.status === 'error') {
      alertServiceError(
        state.errorMsg,
        'Se produjo un error al intentar obtener datos de usuarios',
      )
    }
  }, [state.status, dispatch, state.errorMsg])

  const handleInput = debounce((val) => {
    if (val.length >= 3) {
      dispatch(searchUsersThunk(val))
    } else {
      dispatch(getUsersThunk())
    }
  }, 500)

  return (
    <Box width={{ sx: '100%', md: '600px' }} style={{ margin: 'auto' }}>
      <Grid container>
        <Grid item xs={8}>
          <TextField
            id="outlined-basic"
            label="Nombre usuario"
            variant="outlined"
            onChange={(e) => handleInput(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="select">Tipo</InputLabel>
            <Select
              defaultValue={'Todos'}
              labelId="select"
              id="select"
              // value={age}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={'Todos'}>Todos los usuarios</MenuItem>
              <MenuItem value={'Administrador'}>
                Usuarios Administrador
              </MenuItem>
              <MenuItem value={'Usuario'}>Uruarios Comunes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>

    // <div className="search">
    //   <input
    //     type="text"
    //     placeholder="Buscar Usuario por nombre"
    //     className="search-input"
    //     onChange={(e) => handleInput(e.target.value)}
    //   />
    // </div>
  )
}

export default InputSearchUsers
