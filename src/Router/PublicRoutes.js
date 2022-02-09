import { Redirect, Route } from 'react-router-dom'
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
import NotFound from '../Components/NotFound/NotFound'

export const PublicRoutes = () => {
  return (
    <>
      <Route exact path="/" component={Index} />
      <Route exact path="/contacto" component={ContactHome} />
      <Route exact path="/novedades/:newsId" component={NewsDetail} />
      <Route exact path="/nosotros" component={About} />
      <Route exact path="/create-user" component={UserForm} />
      <Route exact path="/school-campaign" component={SchoolCampaign} />
      <Route exact path="/toys-campaign" component={ToysCampaign} />
      <Route exact path="/set-user" component={LoginForm} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activities/:id" component={Detail} />
      <Route exact path="/news" component={NewsList} />
    </>
  )
}
