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


export const PublicRoutes = () => {
  return (
    <>
     <Route path="/" exact component={Index} /> 
        <Route path="/contacto" component={ContactHome}/>
     <Route path="/novedades/:newsId" component={NewsDetail} />
      <Route path="/nosotros" component={About} />
      <Route path="/create-user" component={UserForm} />
      <Route path="/school-campaign" component={SchoolCampaign} />
      <Route path="/toys-campaign" component={ToysCampaign} />
      <Route path="/set-user" component={LoginForm} />
      <Route exact path="/activities" component={Activities} />
      <Route path="/activities/:id" component={Detail} />
      <Route path="/news" component={NewsList} />
    </>
  )
}
