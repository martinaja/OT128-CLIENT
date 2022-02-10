<<<<<<< HEAD
<<<<<<< HEAD

import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'


=======
import { Redirect, Route } from 'react-router-dom'
=======

import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
>>>>>>> 1720bcf05e0de4b881c7287208c72c0eec9c1f5a
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
