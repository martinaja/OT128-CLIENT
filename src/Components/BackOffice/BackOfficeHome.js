import { Container } from '@mui/material'
import BackOfficeContent from './BackOfficeContent'
import HeaderBackoffice from './HeaderBackoffice'

const BackOfficeHome = ({ children }) => {
  return (
    <>
      <HeaderBackoffice />
      <Container>
        <BackOfficeContent />
        {children}
      </Container>
    </>
  )
}

export default BackOfficeHome
