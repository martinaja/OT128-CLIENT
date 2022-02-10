
import { Switch, Route } from 'react-router-dom'
import { PrivateRoutes } from './privateRoutes'
import { PublicRoutes } from './publicRoutes'

export const Routes = () => {
  return (
    <>
      <Switch>
        {PublicRoutes}
        {PrivateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>

  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
