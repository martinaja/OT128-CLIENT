import { BrowserRouter, Switch } from 'react-router-dom'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoutes />
      </Switch>
      <Switch>
        <PrivateRoutes />
      </Switch>
    </BrowserRouter>
  )
}
