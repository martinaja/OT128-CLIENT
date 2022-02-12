import React, { useState } from 'react'
import { debounce } from 'lodash'
import { searchCategories } from '../../Services/apiServices/categoriesApiService'

const InputSearchCategories = function () {
  const [searchedTitle, setSearchedTitle] = useState('')
  const [message, setMessage] = useState('')

  const handleInput = debounce(async (val) => {
    if (val.length >= 3) {
      const response = await searchCategories(val)
      console.log(response.data.data)
    } else {
      setMessage('Ingresa al menos 3 caracteres para la búsqueda')
    }
  }, 3000)

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscar titulo"
        className="search-input"
        onChange={(e) => handleInput(e.target.value)}
      />
      {searchedTitle.length > 0 ? (
        <div>
          {searchedTitle.map((i) => (
            <p key={i}>{i.name}</p>
          ))}
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  )
}

export default InputSearchCategories
