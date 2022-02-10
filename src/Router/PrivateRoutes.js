<<<<<<< HEAD

import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


=======
import { Redirect, Route } from 'react-router-dom'
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
import { useSelector } from 'react-redux'
>>>>>>> 9b966e7a2a8f27e0c7f141ba823d8dec0311fb3d


function PrivateRoute({ children, ...rest }) {
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

export const PrivateRoutes = () => {
  return (
    <>
      <PrivateRoute path="/backoffice">
        <BackOfficeHome />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/activities">
        <ActivitiesScreen/>
      </PrivateRoute>
      <PrivateRoute path="/backoffice/create-activity">
        <ActivitiesForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/create-activity/:id">
        <ActivitiesForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/create-category">
        <CategoriesForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/create-category/:id">
        <CategoriesForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/news">
        <NewsForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/news/:newsId">
        <NewsForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/members">
        <MembersScreen />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/members/edit">
        <MembersForm />
      </PrivateRoute>
      <PrivateRoute path="/create-member">
        <MembersForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/slides">
        <SlidesScreen />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/slides/create">
        <SlidesForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/slides/create/:slideId">
        <SlidesForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/create-testimonials">
        <TestimonialForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/create-testimonials/:id">
        <TestimonialForm />
      </PrivateRoute>
      <PrivateRoute path="/create-project">
        <ProjectsForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/organization">
        <OrganizationScreen />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/organization/edit">
        <OrganizationForm />
      </PrivateRoute>
      <PrivateRoute path="/backoffice/users">
        <UsersHome/>
      </PrivateRoute>
      <PrivateRoute path="/backoffice/users/create">
        <UserForm />
      </PrivateRoute>
    </>
  )
}
