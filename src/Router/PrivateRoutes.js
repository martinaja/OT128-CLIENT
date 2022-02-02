import { Route } from 'react-router-dom'
import ActivitiesForm from '../Components/Activities/ActivitiesForm'
import CategoriesForm from '../Components/Categories/CategoriesForm'
import NewsForm from '../Components/News/NewsForm'
import MembersForm from '../Components/Members/MembersForm'
import SlidesForm from '../Components/Slides/SlidesForm'
import TestimonialForm from '../Components/Testimonials/TestimonialsForm'
import ProjectsForm from '../Components/Projects/ProjectsForm'
import OrganizationForm from '../Components/Organization/OrganizationForm'

export const PrivateRoutes = () => {
  return (
    <>
      <Route path="/create-activity" component={ActivitiesForm} />
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
      <Route path="/backoffice/members/edit" component={MembersForm} />
      <Route path="/create-member" component={MembersForm} />
      <Route exact path="/backoffice/slides" component={SlidesForm} />
      <Route path="/backoffice/slides/:slideId" component={SlidesForm} />
      <Route path="/create-testimonials" component={TestimonialForm} />
      <Route path="/create-project" component={ProjectsForm} />
      <Route
        path="/backoffice/organization/edit"
        component={OrganizationForm}
      />
    </>
  )
}
