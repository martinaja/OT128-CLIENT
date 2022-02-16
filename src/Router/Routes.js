import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom'
import PublicContent from '../Components/PublicWeb/PublicContent'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import LoginForm from '../Components/Auth/LoginForm'
import RegisterForm from '../Components/Auth/RegisterForm'
import NotFound from '../Components/NotFound/NotFound'
import { PublicRoutes } from './PublicRoutes'
import SchoolCampaign from '../Campaigns/School/SchoolCampaign'
import ToysCampaign from '../Campaigns/Toys/ToysCampaign'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={[
            '/',
            '/contacto',
            '/nosotros',
            '/create-user',
            '/activities',
            '/news',
            '/news/:newsId',
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
        <Route path="/404" component={NotFound} />
        <Route path="/*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
