import { Container } from '@mui/material'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { PrivateRoutes } from '../../Router/PrivateRoutes'
import BackOfficeContent from './BackOfficeContent'
import HeaderBackoffice from './HeaderBackoffice'

const BackOfficeHome = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth)
  if (!isAuthenticated || role !== 'Admin') return <Redirect to="/" />
  return (
    <>
      <HeaderBackoffice />
      <Container>
        <BackOfficeContent />
        <PrivateRoutes />
      </Container>
    </>
  )
}

export default BackOfficeHome
