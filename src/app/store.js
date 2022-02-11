import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import categoriesReducer from '../features/categories/categoriesReducer'

const store = configureStore({
  reducer: { auth: authReducer, categories: categoriesReducer }, //add reducers
})

export default store
