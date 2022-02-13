import React, { useEffect } from 'react'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { alertServiceError } from '../AlertService'
import {
  getUsersThunk,
  searchUsersThunk,
} from '../../features/backofficeUsers/usersReducer'

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
    <div className="search">
      <input
        type="text"
        placeholder="Buscar categoría"
        className="search-input"
        onChange={(e) => handleInput(e.target.value)}
      />
    </div>
  )
}

export default InputSearchUsers
