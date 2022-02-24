import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'

//=======================================//=======================================
//Se comprueba que los elementos del Header sean correctos para el usuario no autenticado en desktop y en mobile
//=======================================//=======================================
test('Render components users not autenticated in desktop and mobile', async () => {
  const authReducer = createSlice({
    name: 'authentication',
    initialState: {
      status: '',
      token: false,
      isAuthenticated: false,
      user: {},
      role: undefined,
    },
  })

  const store = configureStore({
    reducer: {
      auth: authReducer.reducer,
    }, //add reducers
  })

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const displayedImage = document.querySelector('img[alt="Logo ong"]')

  // Renderizado de los elementos del Header para el usuario no autenticado en desktop
  expect(
    await screen.getAllByRole('link', { name: /Inicio/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Nosotros/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Actividades/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Novedades/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Testimonios/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Contacto/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Login/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Register/i })[0],
  ).toBeInTheDocument()

  // Renderizado de los elementos del Header para el usuario no autenticado en Mobile
  expect(
    await screen.getAllByRole('link', { name: /Inicio/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Nosotros/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Actividades/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Novedades/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Testimonios/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Contacto/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Login/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Register/i })[1],
  ).toBeInTheDocument()

  expect(displayedImage).toBeInTheDocument()

  expect(await screen.queryByText(/Backoffice/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/LogOut/i)).not.toBeInTheDocument()
})

//=======================================//=======================================
//Se comprueba que los elementos del Header sean correctos para el usuario  autenticado con rol de administrador en desktop y en mobile
//=======================================//=======================================
test('Render components users autenticated with admin role in desktop and mobile', async () => {
  const authReducer = createSlice({
    name: 'authentication',
    initialState: {
      status: '',
      token: false,
      isAuthenticated: true,
      user: {},
      role: 'Admin',
    },
  })

  const store = configureStore({
    reducer: {
      auth: authReducer.reducer,
    }, //add reducers
  })

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  // Renderizado de los elementos del Header para el usuario Administrador en desktop
  expect(
    await screen.getAllByRole('link', { name: /Inicio/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Nosotros/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Actividades/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Novedades/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Testimonios/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /LogOut/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Backoffice/i })[0],
  ).toBeInTheDocument()

  // Renderizado de los elementos del Header para el usuario Administrador en mobile
  expect(
    await screen.getAllByRole('link', { name: /Inicio/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Nosotros/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Actividades/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Novedades/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Testimonios/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /LogOut/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Backoffice/i })[1],
  ).toBeInTheDocument()

  expect(await screen.queryByText(/Login/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/Register/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/Contacto/i)).not.toBeInTheDocument()
  expect(await screen.queryByAltText(/Logo ong/i)).not.toBeInTheDocument()
})

//=======================================//=======================================
//Se comprueba que los elementos del Header sean correctos para el usuario autenticado con rol estandar en desktop y mobile
//=======================================//=======================================
test('Render components users autenticated with standar role in desktop and mobile', async () => {
  const authReducer = createSlice({
    name: 'authentication',
    initialState: {
      status: '',
      token: false,
      isAuthenticated: true,
      user: {},
      role: 'Standard',
    },
  })

  const store = configureStore({
    reducer: {
      auth: authReducer.reducer,
    }, //add reducers
  })

  render(
    <BrowserRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </BrowserRouter>,
  )

  const displayedImage = document.querySelector('img[alt="Logo ong"]')

  // Renderizado de los elementos del Header para el usuario Administrador en desktop
  expect(
    await screen.getAllByRole('link', { name: /Inicio/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Nosotros/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Actividades/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Novedades/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Testimonios/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Contacto/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/ })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /LogOut/ })[0],
  ).toBeInTheDocument()

  // Renderizado de los elementos del Header para el usuario Administrador en mobile
  expect(
    await screen.getAllByRole('link', { name: /Inicio/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Nosotros/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Actividades/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Novedades/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Testimonios/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Contacto/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/ })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /LogOut/ })[1],
  ).toBeInTheDocument()

  expect(displayedImage).toBeInTheDocument()

  expect(await screen.queryByText(/Backoffice/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/Login/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/Register/i)).not.toBeInTheDocument()
})
