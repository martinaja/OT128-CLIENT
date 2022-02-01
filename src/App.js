import React, { useState } from 'react'
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
import Activities from './Components/Activities/ActivitiesDetails'
import NewsList from './Components/News/NewsList'
import Index from './Components/Home/Index'
import Footer from './Components/Footer/Footer'



function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
const [value, setValue] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            {<Route path="/" exact component={Index} />}
            <Route path="/create-activity" component={ActivitiesForm} />
            <Route path="/create-category" component={CategoriesForm} />
            <Route exact path="/backoffice/news" component={NewsForm} />
            <Route path="/backoffice/news/:newsId" component={NewsForm} />
            <Route path="/backoffice/create-slide" component={SlidesForm} />
            <Route path="/create-testimonials" component={TestimonialForm} />
            <Route path="/create-user" component={UserForm} />
            <Route path="/create-member" component={MembersForm} />
            <Route path="/create-project" component={ProjectsForm} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/set-user" component={LoginForm} />
            <Route path="/activities" component={Activities} />
            <Route path="/news" component={NewsList} />
          </Switch>
          <Footer  value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
