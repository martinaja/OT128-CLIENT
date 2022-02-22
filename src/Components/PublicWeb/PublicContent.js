import Footer from './Footer/Footer'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getUserRole } from '../../features/auth/authReducer'
import Header from './Header/Header'
import { Container } from '@mui/material'

const PublicContent = ({ children }) => {
  const { isAuthenticated, role, user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  if (isAuthenticated) {
    if (!role) dispatch(getUserRole(user.role_id))
  }

  return (
    <>
      <Header />
      <div style={{ minHeight: '80vh' }}>{children}</div>
      <Footer />
    </>
  )
}

export default PublicContent
