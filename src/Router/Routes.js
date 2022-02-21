import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import PublicContent from '../Components/PublicWeb/PublicContent'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import LoginForm from '../Components/Auth/LoginForm'
import RegisterForm from '../Components/Auth/RegisterForm'
import NotFound from '../Components/NotFound/NotFound'
import { PublicRoutes } from './PublicRoutes'
import SchoolCampaign from '../Campaigns/School/SchoolCampaign'
import ToysCampaign from '../Campaigns/Toys/ToysCampaign'
import { Donations } from '../Components/Donations/Donations'
import Thankyou from '../Components/Donations/Thankyou'



export const Routes = () => {
  return (
    <BrowserRouter>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
      >
        <Route
          exact
          path={[
            '/',
            '/contacto',
            '/nosotros',
            '/create-user',
            '/activities',
            '/novedades',
            '/testimonios',
            '/novedades/:newsId',
            '/activities/:id',
            '/404',
          ]}
        >
          <PublicContent>
            <PublicRoutes />
          </PublicContent>
        </Route>
        <Route path="/backoffice" component={BackOfficeHome} />
        <Route path="/school-campaign" component={SchoolCampaign} />
        <Route path="/toys-campaign" component={ToysCampaign} />
        <Route path="/login" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/donations" component={Donations} />
        <Route path="/gracias" component={Thankyou} />
        <Route path="/404" component={NotFound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </AnimatedSwitch>
    </BrowserRouter>
  )
}
