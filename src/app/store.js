import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import usersReducer from '../features/backofficeUsers/usersReducer'

const store = configureStore({
  reducer: { auth: authReducer, users: usersReducer }, //add reducers
})

export default store
