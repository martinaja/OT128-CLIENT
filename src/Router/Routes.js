import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import { publicRoutes } from './PublicRoutes'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        {publicRoutes}
        <Route path="/backoffice" component={BackOfficeHome} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  )
}
