import { PublicRoutes } from '../../Router/PublicRoutes'
// import Footer from './Footer/Footer' Conflictive Footer
import Header from './Header/Header'

const PublicContent = () => {
  return (
    <>
      <Header />
      <PublicRoutes />
      {/* <Footer /> */}
    </>
  )
}

export default PublicContent
