import { Route, Switch } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import LoadingBar from '../Components/LoadingPage/LoadingPage'
import PublicContent from '../Components/PublicWeb/PublicContent'
import RegisterForm from '../Components/Auth/RegisterForm'
import LoginForm from '../Components/Auth/LoginForm'
import TestimonialHome from '../Components/Testimonials/TestimonialHome'
import TestimonialDetails from '../Components/Testimonials/TestimonialDetails'
import ActivityDetail from '../Components/Activities/ActivitiesDetails'
const CampaignSelect = lazy(() => import('../Campaigns/CampaignSelect'))
const NewsDetail = lazy(() => import('../Components/News/Detail/NewsDetail'))
const About = lazy(() => import('../Components/About/About'))
const ActivitiesList = lazy(() =>
  import('../Components/Activities/ActivitiesList'),
)
const UserForm = lazy(() => import('../Components/Users/UsersForm'))
const Index = lazy(() => import('../Components/Home/Index'))
const Donations = lazy(() => import('../Components/Donations/Donations'))
const Thankyou = lazy(() => import('./../Components/Donations/Thankyou'))
const PublicNewHome = lazy(() => import('../Components/News/PublicNewHome'))
const ContactHome = lazy(() => import('../Components/Contact/ContactHome'))

export const PublicRoutes = () => (
  <Switch>
    <Suspense fallback={<LoadingBar />}>
      <PublicContent>
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
          <ActivitiesList />
        </Route>

        <Route exact path="/activities/:id">
          <ActivityDetail />
        </Route>

        <Route exact path="/donations">
          <Donations />
        </Route>

        <Route exact path="/testimonios">
          <TestimonialHome />
        </Route>

        <Route exact path="/testimonios/:id">
          <TestimonialDetails />
        </Route>

        <Route exact path="/gracias">
          <Thankyou />
        </Route>

        <Route exact path="/login">
          <LoginForm />
        </Route>

        <Route exact path="/campaign">
          <CampaignSelect />
        </Route>

        <Route exact path="/register">
          <RegisterForm />
        </Route>
      </PublicContent>
    </Suspense>
  </Switch>
)
