<<<<<<< HEAD
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
=======
>>>>>>> 9b966e7a2a8f27e0c7f141ba823d8dec0311fb3d
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'
import { Switch, Route } from 'react-router-dom'

export const Routes = () => {
  return (
<<<<<<< HEAD
    <>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>

>>>>>>> 1f20bce33bf9786db65c27af670e5f44a0e9edbd
=======
    <Switch>
      {publicRoutes}
      {privateRoutes}
      <Route path={'*'} component={Error404} />
    </Switch>
>>>>>>> 9b966e7a2a8f27e0c7f141ba823d8dec0311fb3d
  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
