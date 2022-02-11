import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ActivitiesForm from '../Components/Activities/ActivitiesForm'
import CategoriesForm from '../Components/Categories/CategoriesForm'
import NewsForm from '../Components/News/NewsForm'
import MembersForm from '../Components/Members/MembersForm'
import SlidesForm from '../Components/Slides/SlidesForm'
import TestimonialForm from '../Components/Testimonials/TestimonialsForm'
import ProjectsForm from '../Components/Projects/ProjectsForm'
import OrganizationForm from '../Components/Organization/OrganizationForm'
import UsersHome from '../Components/Users/UsersHome'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import OrganizationScreen from '../Components/Organization/OrganizationScreen'
import MembersScreen from '../Components/Members/MembersScreen'
import ActivitiesScreen from '../Components/Activities/ActivitiesScreen'
import UserForm from '../Components/Users/UsersForm'
import SlidesScreen from './../Components/Slides/SlidesList'
import NewsTable from '../Components/News/Table/NewsTable'
import CategoriesHome from '../Components/Categories/CategoriesHome'

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated === true ? children : <Redirect to="/login" />
      }}
    />
  )
}

export const privateRoutes = [
  <PrivateRoute exact path="/backoffice" key="backoffice">
    <BackOfficeHome />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/activities" key="backoffice/activities">
    <ActivitiesScreen />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/create-activity"
    key="backoffice/create-activity"
  >
    <ActivitiesForm />
  </PrivateRoute>,
  <PrivateRoute exact path="/backoffice/categories" key="backoffice/categories">
    <CategoriesHome />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/categories/create"
    key="backoffice/categories/create"
  >
    <CategoriesForm />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/categories/create/:id"
    key="backoffice/categories/create/:id"
  >
    <CategoriesForm />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/categories" key="backoffice/categories">
    <CategoriesHome />
  </PrivateRoute>,

  <PrivateRoute
    path="/backoffice/create-activity/:id"
    key="backoffice/create-activity/:id"
  >
    <ActivitiesForm />
  </PrivateRoute>,
  <PrivateRoute exact path="/backoffice/news" key="backoffice/news">
    <NewsTable />
  </PrivateRoute>,
  <PrivateRoute
    exact
    path="/backoffice/news/create"
    key="/backoffice/news/create"
  >
    <NewsForm />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/news/create/:newsId"
    key="/backoffice/news/create/:newsId"
  >
    <NewsForm />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/members" key="backoffice/members">
    <MembersScreen />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/members/edit" key="backoffice/members/edit">
    <MembersForm />
  </PrivateRoute>,
  <PrivateRoute path="/create-member" key="create-member">
    <MembersForm />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/slides" key="backoffice/slides">
    <SlidesScreen />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/slides/create" key="backoffice/slides/create">
    <SlidesForm />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/slides/create/:slideId"
    key="backoffice/slides/create/:slideId"
  >
    <SlidesForm />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/create-testimonials"
    key="backoffice/create-testimonials"
  >
    <TestimonialForm />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/create-testimonials/:id"
    key="backoffice/create-testimonials/:id"
  >
    <TestimonialForm />
  </PrivateRoute>,
  <PrivateRoute path="/create-project" key="create-project">
    <ProjectsForm />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/organization" key="backoffice/organization">
    <OrganizationScreen />
  </PrivateRoute>,
  <PrivateRoute
    path="/backoffice/organization/edit"
    key="backoffice/organization/edit"
  >
    <OrganizationForm />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/users" key="backoffice/users">
    <UsersHome />
  </PrivateRoute>,
  <PrivateRoute path="/backoffice/users/create" key="backoffice/users/create">
    <UserForm />
  </PrivateRoute>,
]
