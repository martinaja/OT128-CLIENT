import { Redirect, Route, Switch } from 'react-router-dom'
import { publicRoutes } from '../../Router/PublicRoutes'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const PublicContent = () => {
  return (
    <>
      <Header />
      <Switch>
        {publicRoutes.map(({ path, exact, component: Component }) => {
          return (
            <Route key={path} path={path} exact={exact}>
              <Component />
            </Route>
          )
        })}
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default PublicContent
