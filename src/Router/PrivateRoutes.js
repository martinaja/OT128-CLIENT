import { Route } from 'react-router-dom'
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
import CategoriesHome from '../Components/Categories/CategoriesHome'
import SlidesScreen from './../Components/Slides/SlidesList'

export const PrivateRoutes = () => {
  return (
    <>
      <Route exact path="/backoffice" component={BackOfficeHome} />
      <Route exact path="/backoffice/activities" component={ActivitiesScreen} />
      <Route
        exact
        path="/backoffice/create-activity"
        component={ActivitiesForm}
      />
      <Route
        path="/backoffice/create-activity/:id"
        component={ActivitiesForm}
      />
      <Route
        exact
        path="/backoffice/categories/create"
        component={CategoriesForm}
      />
      <Route
        path="/backoffice/categories/create/:id"
        component={CategoriesForm}
      />
      <Route exact path="/backoffice/news" component={NewsForm} />
      <Route path="/backoffice/news/:newsId" component={NewsForm} />
      <Route exact path="/backoffice/members" component={MembersScreen} />
      <Route path="/backoffice/members/edit" component={MembersForm} />
      <Route path="/create-member" component={MembersForm} />
      <Route exact path="/backoffice/slides" component={SlidesScreen} />
      <Route exact path="/backoffice/slides/create" component={SlidesForm} />
      <Route path="/backoffice/slides/create/:slideId" component={SlidesForm} />
      <Route
        exact
        path="/backoffice/create-testimonials"
        component={TestimonialForm}
      />
      <Route
        path="/backoffice/create-testimonials/:id"
        component={TestimonialForm}
      />
      <Route path="/create-project" component={ProjectsForm} />
      <Route
        exact
        path="/backoffice/organization"
        component={OrganizationScreen}
      />
      <Route
        path="/backoffice/organization/edit"
        component={OrganizationForm}
      />
      <Route exact path="/backoffice/users" component={UsersHome} />
      <Route exact path="/backoffice/users/create" component={UserForm} />
      <Route exact path="/backoffice/categories" component={CategoriesHome} />
    </>
  )
}
