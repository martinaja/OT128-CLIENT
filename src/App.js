import { createTheme, CssBaseline } from '@mui/material'
import { Routes } from './Router/Routes'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core'

const theme = createTheme({
  palette: {
    background: {
      color: 'rgb(218 246 247)',
      default: 'rgb(218 246 247)',
      m: 0,
    },

  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App
