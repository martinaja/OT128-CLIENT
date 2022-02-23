// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from '../features/auth/authReducer'
// import activitiesReducer from '../features/activitiesReducer'
// import categoriesReducer from '../features/categories/categoriesReducer'
// import usersReducer from '../features/backofficeUsers/usersReducer'
// import membersReducer from '../features/members/membersReducer'
// import newsReducer from '../features/news/newsReducer'
// import slidesReducer from '../features/slide/slidesReducer'
// import organizationReducer from '../features/organization/organizationReducer'
// import testimonialReducer from '../features/testimonial/testimonialReducer'

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     members: membersReducer,
//     users: usersReducer,
//     categories: categoriesReducer,
//     activities: activitiesReducer,
//     news: newsReducer,
//     slides: slidesReducer,
//     organization: organizationReducer,
//     testimonial: testimonialReducer,
//   }, //add reducers
// })
// export default store

import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../reducers/authReducer/authReducer'
import newsReducer from '../reducers/newsReducer/newsReducer'
import organizationReducer from '../reducers/organizationReducer/organizationReducer'
import testimoniesReducer from '../reducers/testimoniesReducer/testimoniesReducer'
import activitiesReducer from '../reducers/activitiesReducer/activitiesReducer'
import membersReducer from '../reducers/membersReducer/membersReducer'
import usersReducer from '../reducers/usersReducer/userReducer'

const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    testimonies: testimoniesReducer,
    organization: organizationReducer,
    activities: activitiesReducer,
    members: membersReducer,
    users: usersReducer,
  },
})

export default store
