import React from 'react'
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
import { Container } from '@material-ui/core'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme, CssBaseline } from '@mui/material'
import Footer from './Components/Footer/Footer'



const theme = createTheme({
  palette: {
    background: {
      default: '#35858B',
      m: 0,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
 <BrowserRouter>
        <Switch>
          <Container>
            <Route path="/" exact component={Index} />
            <Route path="/create-activity" component={ActivitiesForm} />
            <Route path="/create-category" component={CategoriesForm} />
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
          </Container>
        </Switch>
        <Footer/>
      </BrowserRouter>

       </ThemeProvider>
  )
}
export default App
