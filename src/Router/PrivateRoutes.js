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
import OrganizationScreen from '../Components/Organization/OrganizationScreen'
import MembersScreen from '../Components/Members/MembersScreen'
import ActivitiesScreen from '../Components/Activities/ActivitiesScreen'
import UserForm from '../Components/Users/UsersForm'
import SlidesScreen from './../Components/Slides/SlidesList'
import NewsTable from '../Components/News/Table/NewsTable'
import CategoriesHome from '../Components/Categories/CategoriesHome'

import UsersHome from '../Components/Users/UsersHome'

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
  {
    path: '/backoffice',
    exact: true,
  },
  {
    path: '/backoffice/activities',
    exact: true,
    component: ActivitiesScreen,
  },
  {
    path: '/backoffice/activities/create',
    exact: true,
    component: ActivitiesForm,
  },
  {
    path: '/backoffice/activities/create/:id',
    exact: false,
    component: ActivitiesForm,
  },
  {
    path: '/backoffice/categories',
    exact: true,
    component: CategoriesHome,
  },
  {
    path: '/backoffice/categories/create',
    exact: true,
    component: CategoriesForm,
  },
  {
    path: '/backoffice/categories/create/:id',
    exact: false,
    component: CategoriesForm,
  },
  {
    path: '/backoffice/news',
    exact: true,
    component: NewsTable,
  },
  {
    path: '/backoffice/news/create',
    exact: true,
    component: NewsForm,
  },
  {
    path: '/backoffice/news/create/:newsId',
    exact: false,
    component: NewsForm,
  },
  {
    path: '/backoffice/members',
    exact: true,
    component: MembersScreen,
  },
  {
    path: '/backoffice/members/create',
    exact: true,
    component: MembersForm,
  },
  {
    path: '/backoffice/members/create/:id',
    exact: false,
    component: MembersForm,
  },
  {
    path: '/backoffice/slides',
    exact: true,
    component: SlidesScreen,
  },
  {
    path: '/backoffice/slides/create',
    exact: true,
    component: SlidesForm,
  },
  {
    path: '/backoffice/slides/create/:slideId',
    exact: false,
    component: SlidesForm,
  },
  {
    path: '/backoffice/create-testimonials',
    exact: true,
    component: TestimonialForm,
  },
  {
    path: '/backoffice/create-testimonials/:id',
    exact: false,
    component: TestimonialForm,
  },
  {
    path: '/backoffice/create-project',
    exact: false,
    component: ProjectsForm,
  },
  {
    path: '/backoffice/organization',
    exact: true,
    component: OrganizationScreen,
  },
  {
    path: '/backoffice/organization/edit',
    exact: false,
    component: OrganizationForm,
  },
  {
    path: '/backoffice/users',
    exact: true,
    component: UsersHome,
  },
  {
    path: '/backoffice/users/create',
    exact: true,
    component: UserForm,
  },
  {
    path: '/backoffice/users/create/:id',
    exact: false,
    component: UserForm,
  },
]
