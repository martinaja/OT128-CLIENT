import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import activitiesReducer from '../features/activitiesReducer'
import categoriesReducer from '../features/categories/categoriesReducer'
import usersReducer from '../features/backofficeUsers/usersReducer'
import membersReducer from '../features/members/membersReducer'
import newsReducer from '../features/news/newsReducer'
import slidesReducer from '../features/auth/slide/slidesReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    members: membersReducer,
    users: usersReducer,
    categories: categoriesReducer,
    activities: activitiesReducer,
    news: newsReducer,
    slides: slidesReducer,
  }, //add reducers
})
export default store
