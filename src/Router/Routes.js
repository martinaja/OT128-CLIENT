import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'
import { Switch, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

export const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  console.log(isAuthenticated)

  return (
    <Switch>
      {publicRoutes}
      {privateRoutes}
      <Route path={'*'} component={Error404} />
    </Switch>
  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
