import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import newsReducer from '../features/newsReducer'

const store = configureStore({
  reducer: { auth: authReducer, news: newsReducer},
})

export default store
