import React from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ActivitiesForm from './Components/Activities/ActivitiesForm'
import CategoriesForm from './Components/Categories/CategoriesForm'
import NewsForm from './Components/News/NewsForm'
import SlidesForm from './Components/Slides/SlidesForm'
import TestimonialForm from './Components/Testimonials/TestimonialsForm'
import UserForm from './Components/Users/UsersForm'
import SchoolCampaign from './Campaigns/School/SchoolCampaign'
import ToysCampaign from './Campaigns/Toys/ToysCampaign'
import MembersForm from './Components/Members/MembersForm'
import ProjectsForm from './Components/Projects/ProjectsForm'
import LoginForm from './Components/Auth/LoginForm'
import OrganizationForm from './Components/Organization/OrganizationForm'
import Header from './Components/Header/Header'
import NewsDetail from './Components/News/Detail/NewsDetail'
import About from './Components/About/About'
import Activities from './Components/Activities/ActivitiesDetails'
import NewsList from './Components/News/NewsList'
import Index from './Components/Home/Index'
import ContactHome from './Components/Contact/ContactHome'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index} />
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
          <Route path="/contacto" component={ContactHome} />
          <Route exact path="/backoffice/news" component={NewsForm} />
          <Route path="/novedades/:newsId" component={NewsDetail} />
          <Route path="/backoffice/news/:newsId" component={NewsForm} />
          <Route path="/backoffice/members/edit" component={MembersForm} />
          <Route path="/nosotros" component={About} />
          <Route exact path="/backoffice/slides" component={SlidesForm} />
          <Route path="/backoffice/slides/:slideId" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/set-user" component={LoginForm} />
          <Route path="/activities" component={Activities} />
          <Route path="/news" component={NewsList} />
          <Route
            path="/backoffice/organization/edit"
            component={OrganizationForm}
          />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
