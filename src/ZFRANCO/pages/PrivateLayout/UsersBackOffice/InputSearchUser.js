// import React, { useEffect, useState } from 'react'

// import { debounce } from 'lodash'

// import { alertServiceError } from '../../../services/AlertService/AlertService'

// import {
//   Box,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
// } from '@mui/material'
// import SearchIcon from '@mui/icons-material/Search'

// import { useDispatch, useSelector } from 'react-redux'
// import {
//   getUsersThunk,
//   searchUsersThunk,
// } from '../../../redux/reducers/usersReducer/userReducer'

// export const InputSearchUsers = () => {
//   // const dispatch = useDispatch()
//   // const state = useSelector((state) => state.users)

//   // const [querySearch, setQuerySearch] = useState({
//   //   name: '',
//   //   type: '',
//   // })

//   // useEffect(() => {
//   //   if (state.status === 'idle') {
//   //     dispatch(getUsersThunk())
//   //   }

//   //   if (state.status === 'error') {
//   //     alertServiceError(
//   //       state.errorMsg,
//   //       'Se produjo un error al intentar obtener datos de usuarios',
//   //     )
//   //   }
//   // }, [state.status, dispatch, state.errorMsg])

//   // useEffect(() => {
//   //   ;(() => {
//   //     if (querySearch.name.length >= 3) {
//   //       console.log(querySearch)
//   //       dispatch(searchUsersThunk(querySearch))
//   //     } else {
//   //       if (querySearch.type === '') {
//   //         dispatch(getUsersThunk())
//   //       } else if (querySearch.type === 1 || querySearch.type === 2) {
//   //         const searchOnlyByFilter = {
//   //           name: '',
//   //           type: querySearch.type,
//   //         }
//   //         dispatch(searchUsersThunk(searchOnlyByFilter))
//   //       }
//   //     }
//   //   })()
//   // }, [querySearch, dispatch])

//   // const handleInput = debounce((e) => {
//   //   setQuerySearch({
//   //     ...querySearch,
//   //     [e.target.name]: e.target.value,
//   //   })
//   // }, 450)

//   // return (
//   //   <Box>
//   //     <Grid container>
//   //       <Grid item xs={8}>
//   //         <TextField
//   //           name="name"
//   //           id="outlined-basic"
//   //           label="Nombre usuario"
//   //           variant="outlined"
//   //           onChange={handleInput}
//   //           fullWidth
//   //           InputProps={{
//   //             startAdornment: <SearchIcon />,
//   //           }}
//   //         />
//   //       </Grid>
//   //       <Grid item xs={4}>
//   //         <FormControl fullWidth>
//   //           <InputLabel id="select">Tipo</InputLabel>
//   //           <Select
//   //             name="type"
//   //             defaultValue={''}
//   //             labelId="select"
//   //             id="select"
//   //             value={querySearch.type}
//   //             label="select"
//   //             onChange={handleInput}
//   //           >
//   //             <MenuItem value={''}>Todos</MenuItem>
//   //             <MenuItem value={1}>Usuario Administrador</MenuItem>
//   //             <MenuItem value={2}>Usuario Regular</MenuItem>
//   //           </Select>
//   //         </FormControl>
//   //       </Grid>
//   //     </Grid>
//   //   </Box>
//   )
// }
