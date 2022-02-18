import { Route, Redirect, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ActivitiesForm from '../Components/Activities/ActivitiesForm'
import CategoriesForm from '../Components/Categories/CategoriesForm'
import NewsForm from '../Components/News/NewsForm'
import MembersForm from '../Components/Members/MembersForm'
import SlidesForm from '../Components/Slides/SlidesForm'
import TestimonialForm from '../Components/Testimonials/TestimonialsForm'
import ProjectsForm from '../Components/Projects/ProjectsForm'
import OrganizationForm from '../Components/Organization/OrganizationForm'
import OrganizationScreen from '../Components/Organization/OrganizationScreen'
import MembersScreen from '../Components/Members/MembersScreen'
import ActivitiesScreen from '../Components/Activities/ActivitiesScreen'
import UserForm from '../Components/Users/UsersForm'
import SlidesScreen from './../Components/Slides/SlidesList'
import NewsTable from '../Components/News/Table/NewsTable'
import CategoriesHome from '../Components/Categories/CategoriesHome'
import UsersHome from '../Components/Users/UsersHome'

export const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, role } = useSelector((state) => state.auth)

  console.log(role)

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated === true && role === 'Admin' ? (
          children
        ) : (
          <Redirect to="/" />
        )
      }}
    />
  )
}

export const PrivateRoutes = () => (
  <Switch>
    <PrivateRoute exact path="/backoffice/activities">
      <ActivitiesScreen />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/activities/create">
      <ActivitiesForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/activities/create/:id">
      <ActivitiesForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/categories">
      <CategoriesHome />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/categories/create">
      <CategoriesForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/categories/create/:id">
      <CategoriesForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/news">
      <NewsTable />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/news/create">
      <NewsForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/news/create/:newsId">
      <NewsForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/members">
      <MembersScreen />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/members/create">
      <MembersForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/members/create/:id">
      <MembersForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/slides">
      <SlidesScreen />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/slides/create">
      <SlidesForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/slides/create/:slideId">
      <SlidesForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/create-testimonials">
      <TestimonialForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/create-testimonials/:id">
      <TestimonialForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/create-project">
      <ProjectsForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/organization">
      <OrganizationScreen />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/organization/edit">
      <OrganizationForm />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/users">
      <UsersHome />
    </PrivateRoute>

    <PrivateRoute exact path="/backoffice/users/create">
      <UserForm />
    </PrivateRoute>

    <PrivateRoute path="/backoffice/users/create/:id">
      <UserForm />
    </PrivateRoute>

    <Route path="/backoffice/*">
      <Redirect to="/404" />
    </Route>
  </Switch>
)
