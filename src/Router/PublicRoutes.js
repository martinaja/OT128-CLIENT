import NewsDetail from '../Components/News/Detail/NewsDetail'
import About from '../Components/About/About'
import Activities from '../Components/Activities/ActivitiesDetails'
import NewsList from '../Components/News/NewsList'
import UserForm from '../Components/Users/UsersForm'
import SchoolCampaign from '../Campaigns/School/SchoolCampaign'
import ToysCampaign from '../Campaigns/Toys/ToysCampaign'
import ContactHome from '../Components/Contact/ContactHome'
import { Detail } from '../Components/Activities/Detail/Detail'
import Index from '../Components/Home/Index'
import RegisterForm from '../Components/Auth/RegisterForm';
import { Donations } from '../Components/Donations/Donations'
import { Thankyou } from './../Components/Donations/Thankyou';


export const publicRoutes = [
  {
    path: '/home',
    exact: true,
    component: Index,
  },
  {
    path: '/home/contacto',
    exact: true,
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
    exact: true,
    component: About,
  },
  {
    path: '/home/create-user',
    exact: true,
    component: UserForm,
  },
  {
    path: '/home/school-campaign',
    exact: true,
    component: SchoolCampaign,
  },
  {
    path: '/home/toys-campaign',
    exact: true,
    component: ToysCampaign,
  },
  {
    path: '/home/activities/',
    exact: true,
    component: Activities,
  },
  {
    path: '/home/activities/:id',
    exact: false,
    component: Detail,
  },
  {
    path: '/home/news',
    exact: true,
    component: NewsList,
  },
  {
    path: '/donations',
    exact: true,
    component: {Donations},
  },
  {
    path: '/gracias',
    exact: true,
    component: {Thankyou},
  },
]
