import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'

const store = configureStore({
  reducer: { auth: authReducer }, //add reducers
})

export default store
