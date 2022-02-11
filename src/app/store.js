import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import membersReducer from '../features/members/membersReducer'

const store = configureStore({
  reducer: { auth: authReducer, members: membersReducer }, //add reducers
})

export default store
