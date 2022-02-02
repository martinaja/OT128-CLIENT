import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Routes } from './Router/Routes'
import ContactHome from './Components/Contact/ContactHome'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <BrowserRouter>
        <Switch>
          <Route path="/contacto" component={ContactHome} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
