import NewsDetail from '../Components/News/Detail/NewsDetail'
import About from '../Components/About/About'
import Activities from '../Components/Activities/ActivitiesDetails'
import NewsList from '../Components/News/NewsList'
import UserForm from '../Components/Users/UsersForm'
import ContactHome from '../Components/Contact/ContactHome'
import { Detail } from '../Components/Activities/Detail/Detail'
import Index from '../Components/Home/Index'
import { Donations } from '../Components/Donations/Donations'
import { Thankyou } from './../Components/Donations/Thankyou'
import { Route, Redirect } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

export const PublicRoutes = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0 }}
    atLeave={{ opacity: 0 }}
    atActive={{ opacity: 1 }}
  >
    <Route exact path="/">
      <Index />
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

    <Route exact path="/news">
      <NewsList />
    </Route>

    <Route path="/news/:newsId">
      <NewsDetail />
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

    <Route path="*">
      <Redirect to="/error-404" />
    </Route>
  </AnimatedSwitch>
)
