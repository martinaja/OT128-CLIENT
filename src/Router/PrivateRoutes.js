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
import UserForm from '../Components/Users/UsersForm'

export const PrivateRoutes = () => {
  return (
    <>
      <Route exact path="/backoffice" component={BackOfficeHome} />
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
        path="/backoffice/create-category"
        component={CategoriesForm}
      />
      <Route
        path="/backoffice/create-category/:id"
        component={CategoriesForm}
      />
      <Route exact path="/backoffice/news" component={NewsForm} />
      <Route path="/backoffice/news/:newsId" component={NewsForm} />
      <Route exact path="/backoffice/members" component={MembersScreen} />
      <Route path="/backoffice/members/edit" component={MembersForm} />
      <Route path="/create-member" component={MembersForm} />
      <Route exact path="/backoffice/slides" component={SlidesForm} />
      <Route path="/backoffice/slides/:slideId" component={SlidesForm} />
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
    </>
  )
}
