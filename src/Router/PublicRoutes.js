import NewsDetail from '../Components/News/Detail/NewsDetail'
import About from '../Components/About/About'
import Activities from '../Components/Activities/ActivitiesDetails'
import NewsList from '../Components/News/NewsList'
import UserForm from '../Components/Users/UsersForm'
import SchoolCampaign from '../Campaigns/School/SchoolCampaign'
import ToysCampaign from '../Campaigns/Toys/ToysCampaign'
import LoginForm from '../Components/Auth/LoginForm'
import ContactHome from '../Components/Contact/ContactHome'
import { Detail } from '../Components/Activities/Detail/Detail'
import Index from '../Components/Home/Index'
import RegisterForm from '../Components/Auth/RegisterForm';

export const publicRoutes = [
  {
    path: '/home',
    exact: true,
    component: Index,
  },
  {
    path: '/home/contacto',
    exact: false,
    component: ContactHome,
  },
  {
    path: '/home/register',
    exact: false,
    component: RegisterForm,
  },
  {
    path: '/home/novedades/:newsId',
    exact: false,
    component: NewsDetail,
  },
  {
    path: '/home/nosotros',
    exact: false,
    component: About,
  },
  {
    path: '/home/create-user',
    exact: false,
    component: UserForm,
  },
  {
    path: '/home/school-campaign',
    exact: false,
    component: SchoolCampaign,
  },
  {
    path: '/home/toys-campaign',
    exact: false,
    component: ToysCampaign,
  },
  {
    path: '/home/login',
    exact: false,
    component: LoginForm,
  },
  {
    path: '/home/activities/',
    exact: false,
    component: Activities,
  },
  {
    path: '/home/activities/:id',
    exact: false,
    component: Detail,
  },
  {
    path: '/home/news',
    exact: false,
    component: NewsList,
  },
]
