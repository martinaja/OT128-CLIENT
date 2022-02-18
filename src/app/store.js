import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authReducer'
import activitiesReducer from '../features/activitiesReducer'
import categoriesReducer from '../features/categories/categoriesReducer'
import usersReducer from '../features/backofficeUsers/usersReducer'
import membersReducer from '../features/members/membersReducer'
import newsReducer from '../features/news/newsReducer'
import slidesReducer from '../features/slide/slidesReducer'
import organizationReducer from '../features/organization/organizationReducer'
import testimonialReducer from '../features/testimonial/testimonialReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    members: membersReducer,
    users: usersReducer,
    categories: categoriesReducer,
    activities: activitiesReducer,
    news: newsReducer,
    slides: slidesReducer,
    organization: organizationReducer,
    testimonial: testimonialReducer,
  }, //add reducers
})
export default store
