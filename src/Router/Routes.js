import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import NotFound from '../Components/NotFound/NotFound'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoutes'

export const Routes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth)

  console.log(isAuthenticated)

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
const Error404 = () => <h1>ERROR ERRROR</h1>
