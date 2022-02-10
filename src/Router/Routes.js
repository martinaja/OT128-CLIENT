import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NotFound from '../Components/NotFound/NotFound'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes />
        {/* </Switch>
      <Switch> */}
        <PrivateRoutes />
        {/* </Switch>
      <Switch> */}
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}
