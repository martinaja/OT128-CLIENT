import { Container } from '@mui/material'
import { PrivateRoutes } from '../../Router/PrivateRoutes'
import BackOfficeContent from './BackOfficeContent'
import HeaderBackoffice from './HeaderBackoffice'

const BackOfficeHome = () => {
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
