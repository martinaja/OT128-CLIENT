<<<<<<< HEAD
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
=======
import { Switch, Route } from 'react-router-dom'
>>>>>>> 1720bcf05e0de4b881c7287208c72c0eec9c1f5a
import { privateRoutes } from './privateRoutes'
import { publicRoutes } from './publicRoutes'

export const Routes = () => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1720bcf05e0de4b881c7287208c72c0eec9c1f5a
    <>
      <Switch>
        {publicRoutes}
        {privateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>

<<<<<<< HEAD
>>>>>>> 1f20bce33bf9786db65c27af670e5f44a0e9edbd
=======
    <Switch>
      {publicRoutes}
      {privateRoutes}
      <Route path={'*'} component={Error404} />
    </Switch>
>>>>>>> 9b966e7a2a8f27e0c7f141ba823d8dec0311fb3d
=======
>>>>>>> 1720bcf05e0de4b881c7287208c72c0eec9c1f5a
  )
}
const Error404 = () => <h1>ERROR ERRROR</h1>
