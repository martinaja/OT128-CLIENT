// import NewsDetail from '../Components/News/Detail/NewsDetail'
// import About from '../Components/About/About'
// import Activities from '../Components/Activities/ActivitiesDetails'
// import UserForm from '../Components/Users/UsersForm'
// import ContactHome from '../Components/Contact/ContactHome'
// import { Detail } from '../Components/Activities/Detail/Detail'
// import Index from '../Components/Home/Index'
// import { Donations } from '../Components/Donations/Donations'
// import { Thankyou } from './../Components/Donations/Thankyou'

// import PublicNewHome from '../Components/News/PublicNewHome'

import { Route, Switch, Redirect } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const NewsDetail = lazy(() => import('../Components/News/Detail/NewsDetail'))
const About = lazy(() => import('../Components/About/About'))
const Activities = lazy(() =>
  import('../Components/Activities/ActivitiesDetails'),
)
const UserForm = lazy(() => import('../Components/Users/UsersForm'))
const Detail = lazy(() => import('../Components/Activities/Detail/Detail'))
const Index = lazy(() => import('../Components/Home/Index'))
const Donations = lazy(() => import('../Components/Donations/Donations'))
const Thankyou = lazy(() => import('./../Components/Donations/Thankyou'))
const PublicNewHome = lazy(() => import('../Components/News/PublicNewHome'))
const ContactHome = lazy(() => import('../Components/Contact/ContactHome'))

export const PublicRoutes = () => (
  <Switch>
    <Suspense fallback={<div>{console.log('Cargando')}</div>}>
      <Route exact path="/">
        <Index />
      </Route>

      <Route exact path="/novedades">
        <PublicNewHome />
      </Route>

      <Route path="/novedades/:newsId">
        <NewsDetail />
      </Route>

      <Route exact path="/contacto">
        <ContactHome />
      </Route>

      <Route exact path="/nosotros">
        <About />
      </Route>

      <Route exact path="/create-user">
        <UserForm />
      </Route>

      <Route exact path="/activities">
        <Activities />
      </Route>

      <Route path="/activities/:id">
        <Detail />
      </Route>

      <Route path="/donations">
        <Donations />
      </Route>

      <Route path="/gracias">
        <Thankyou />
      </Route>
    </Suspense>

    <Route path="*">
      <Redirect to="/error-404" />
    </Route>
  </Switch>
)
