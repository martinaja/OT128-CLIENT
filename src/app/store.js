import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import categoriesReducer from '../features/categories/categoriesReducer'
import usersReducer from '../features/backofficeUsers/usersReducer'
import membersReducer from '../features/members/membersReducer'

const store = configureStore({
  reducer: { auth: authReducer, members: membersReducer, users: usersReducer, categories: categoriesReducer, }, //add reducers


export default store
