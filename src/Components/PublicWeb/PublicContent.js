import Footer from './Footer/Footer'
import Header from './Header/Header'

const PublicContent = ({ children }) => {
  return (
    <>
      <Header />
     
      {children}
      {<Footer />}
    </>
  )
}

export default PublicContent
