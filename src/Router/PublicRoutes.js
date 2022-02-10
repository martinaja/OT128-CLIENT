import { Route } from 'react-router-dom'
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

export const publicRoutes = [
  <Route exact path="/" component={Index} key="Index" />,
  <Route path="/contacto" component={ContactHome} key="ContactHome" />,
  <Route path="/novedades/:newsId" component={NewsDetail} key="NewsDetail" />,
  <Route path="/nosotros" component={About} key="About" />,
  <Route path="/create-user" component={UserForm} key="UserForm" />,
  <Route
    path="/school-campaign"
    component={SchoolCampaign}
    key="SchoolCampaign"
  />,
  <Route path="/toys-campaign" component={ToysCampaign} key="ToysCampaign" />,
  <Route path="/login" component={LoginForm} key="LoginForm" />,
  <Route path="/activities" component={Activities} key="Activities" />,
  <Route path="/activities/:id" component={Detail} key="Detail" />,
  <Route path="/news" component={NewsList} key="NewsList" />,
]

