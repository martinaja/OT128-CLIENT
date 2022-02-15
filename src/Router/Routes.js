import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import PublicContent from '../Components/PublicWeb/PublicContent'
import NotFound from '../Components/NotFound/NotFound'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={PublicContent} />
        <Route path="/backoffice" component={BackOfficeHome} />
        <Route path="/404">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
