import { Switch, Route } from 'react-router-dom'
import { privateRoutes } from './PrivateRoutes'
import { publicRoutes } from './PublicRoutes'

export const Routes = () => {
  return (
    <>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>

  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
