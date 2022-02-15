import { Switch, Route, Redirect } from 'react-router-dom'
import BackOfficeHome from '../Components/BackOffice/BackOfficeHome'
import PublicContent from '../Components/PublicWeb/PublicContent'
import NotFound from '../Components/NotFound/NotFound'
import LoginForm from '../Components/Auth/LoginForm'
import RegisterForm from '../Components/Auth/RegisterForm'

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/404">
          <NotFound />
        </Route>

        <Redirect exact from="/" to="/home" />

        <Route path="/home">
          <PublicContent />
        </Route>

        <Route path="/backoffice">
          <BackOfficeHome />
        </Route>

        <Route path="/login" component={LoginForm} />

        <Route path="/register" component={RegisterForm} />

        <Route path="/*" component={NotFound} />
      </Switch>
    </>
  )
}
