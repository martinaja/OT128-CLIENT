import { Switch, Route } from 'react-router-dom'
<<<<<<< HEAD

import { PublicRoutes } from './PublicRoutes'
import { PrivateRoutes } from './PrivateRoutes'

export const Routes = () => {
  return (
    <Switch>
      {PublicRoutes}
      {PrivateRoutes}
      <Route path={'*'} component={Error404} />
    </Switch>
=======
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'

export const Routes = () => {
  return (
    <>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>

>>>>>>> 1f20bce33bf9786db65c27af670e5f44a0e9edbd
  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
