import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import categoriesReducer from '../features/categories/categoriesReducer'
import usersReducer from '../features/backofficeUsers/usersReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    users: usersReducer,
  }, //add reducers
})

export default store
