
import { Switch, Route } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';

export const Routes = () => {
  return (
    <Switch>
      {PublicRoutes}
      {PrivateRoutes}
      <Route path={'*'} component={Error404} />
    </Switch>
  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
