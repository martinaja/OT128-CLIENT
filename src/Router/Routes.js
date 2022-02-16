import { Route, Switch, Redirect } from 'react-router-dom'

import PublicContent from '../Components/PublicWeb/PublicContent'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import LoginForm from '../Components/Auth/LoginForm'
import RegisterForm from '../Components/Auth/RegisterForm'
import NotFound from '../Components/NotFound/NotFound'
import { PrivateRoute } from './PrivateRoutes'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/error-404">
        <NotFound />
      </Route>

      <PrivateRoute path="/backoffice">
        <BackOfficeHome />
      </PrivateRoute>

      <Route path="/login">
        <LoginForm />
      </Route>

      <Route path="/register">
        <RegisterForm />
      </Route>

      <Route path="/">
        <PublicContent />
      </Route>

      <Route path="*">
        <Redirect to="/error-404" />
      </Route>
    </Switch>
  )
}
