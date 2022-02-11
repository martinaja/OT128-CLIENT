import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import usersReducer from '../features/backofficeUsers/usersReducer'
import membersReducer from '../features/members/membersReducer'

const store = configureStore({
  reducer: { auth: authReducer, members: membersReducer, users: usersReducer }, //add reducers

export default store
