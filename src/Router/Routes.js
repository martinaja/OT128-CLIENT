<<<<<<< HEAD

import { Switch, Route } from 'react-router-dom'
import { PrivateRoutes } from './privateRoutes'
import { PublicRoutes } from './publicRoutes'
=======
import { Switch, Route } from 'react-router-dom'
import { privateRoutes } from './PrivateRoutes'
import { publicRoutes } from './PublicRoutes'
>>>>>>> 14ea1e6c53648a11eec126755df730b13ee7e53e

export const Routes = () => {
  return (
    <>
      <Switch>
<<<<<<< HEAD
        {PublicRoutes}
        {PrivateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>

=======
        {publicRoutes}
        {privateRoutes}
        <Route path="*" component={Error404} />
      </Switch>
    </>
>>>>>>> 14ea1e6c53648a11eec126755df730b13ee7e53e
  )
}

const Error404 = () => <h1>ERROR ERRROR</h1>
