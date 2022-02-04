import Header from './Components/Header/Header'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme, CssBaseline, Container } from '@mui/material'
import { Routes } from './Router/Routes'

const theme = createTheme({
  palette: {
    background: {
      default: '#35858B',
      m: 0,
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  )
}
export default App
