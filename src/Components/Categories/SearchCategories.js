import React, { useEffect } from 'react'
import { debounce } from 'lodash'
import { useDispatch, useSelector } from 'react-redux'
import { alertServiceError } from '../AlertService'
import {
  getCategory,
  searchCategory,
} from '../../features/categories/categoriesReducer'

const InputSearchCategories = function () {
  const dispatch = useDispatch()
  const state = useSelector((state) => state.categories)

  useEffect(() => {
    if (state.status === 'idle') {
      dispatch(getCategory())
    }

    if (state.status === 'error') {
      alertServiceError(
        state.errorMsg,
        'Se produjo un error al intentar obtener datos de categorías',
      )
    }
  }, [state.status, dispatch, state.errorMsg])

  const handleInput = debounce((val) => {
    if (val.length >= 3) {
      dispatch(searchCategory(val))
    } else {
      dispatch(getCategory())
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

export default InputSearchCategories
