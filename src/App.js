import { ThemeProvider } from '@mui/material/styles'
import { createTheme, CssBaseline } from '@mui/material'
import { Routes } from './Router/Routes'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

const theme = createTheme({
  palette: {
    background: {
      color: 'rgb(218 246 247)',
      default: 'rgb(218 246 247)',
      m: 0,
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes />
      <Footer />
    </ThemeProvider>
  )
}
export default App
