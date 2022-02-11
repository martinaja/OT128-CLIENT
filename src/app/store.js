import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import activitiesReducer from '../features/activitiesReducer'

const store = configureStore({
  reducer: { auth: authReducer, activities: activitiesReducer }, //add reducers
})

export default store
