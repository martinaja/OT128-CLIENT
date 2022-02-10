import { PrivateRoute } from './PrivateRoutes'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Index from '../Components/Home/Index'
import NewsDetail from '../Components/News/Detail/NewsDetail'
import About from '../Components/About/About'
import Activities from '../Components/Activities/ActivitiesDetails'
import NewsList from '../Components/News/NewsList'
import UserForm from '../Components/Users/UsersForm'
import SchoolCampaign from '../Campaigns/School/SchoolCampaign'
import ToysCampaign from '../Campaigns/Toys/ToysCampaign'
import LoginForm from '../Components/Auth/LoginForm'
import ContactHome from '../Components/Contact/ContactHome'
import { Detail } from '../Components/Activities/Detail/Detail'

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
import SlidesScreen from './../Components/Slides/SlidesList'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/contacto" component={ContactHome} />
        <Route path="/novedades/:newsId" component={NewsDetail} />
        <Route path="/nosotros" component={About} />
        <Route path="/create-user" component={UserForm} />
        <Route path="/school-campaign" component={SchoolCampaign} />
        <Route path="/toys-campaign" component={ToysCampaign} />
        <Route path="/login" component={LoginForm} />
        <Route path="/activities" component={Activities} />
        <Route path="/activities/:id" component={Detail} />
        <Route path="/news" component={NewsList} />
        <PrivateRoute exact path="/backoffice">
          <BackOfficeHome />
        </PrivateRoute>
        <PrivateRoute path="/backoffice/activities">
          <ActivitiesScreen />
        </PrivateRoute>
        <PrivateRoute exact path="/backoffice/create-activity">
          <ActivitiesForm />
        </PrivateRoute>
        <PrivateRoute path="/backoffice/create-activity/:id">
          <ActivitiesForm />
        </PrivateRoute>
        <PrivateRoute exact path="/backoffice/create-category">
          <CategoriesForm />
        </PrivateRoute>
        <PrivateRoute path="/backoffice/create-category/:id">
          <CategoriesForm />
        </PrivateRoute>
        <PrivateRoute exact path="/backoffice/news">
          <NewsForm />
        </PrivateRoute>
        <PrivateRoute path="/backoffice/news/:newsId">
          <NewsForm />
        </PrivateRoute>
        <PrivateRoute exact path="/backoffice/members">
          <MembersScreen />
        </PrivateRoute>
        <PrivateRoute path="/backoffice/members/edit">
          <MembersForm />
        </PrivateRoute>
        <PrivateRoute exact path="/create-member">
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
        <PrivateRoute exact path="/create-project">
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

        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
