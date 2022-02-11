import { Switch, Route, Redirect } from 'react-router-dom'
import NotFound from '../Components/NotFound/NotFound'
import { privateRoutes } from './PrivateRoutes'
import { publicRoutes } from './PublicRoutes'

export const Routes = () => {
  return (
    <>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <Route exact path="/404" component={NotFound} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </>
  )
}
