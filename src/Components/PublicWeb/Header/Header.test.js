import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { HashRouter } from 'react-router-dom'
import Header from './Header'

//=======================================//=======================================
//Se comprueba que los elementos del Header sean correctos para el usuario no autenticado en desktop
//=======================================//=======================================
test('Render components users not autenticated in desktop', async () => {
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
    <HashRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </HashRouter>,
  )

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
    await screen.getAllByRole('link', { name: /Contribuye/i })[0],
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

  expect(await screen.queryByText(/Backoffice/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/LogOut/i)).not.toBeInTheDocument()
})

//=======================================//=======================================
//Se comprueba que los elementos del Header sean correctos para el usuario no autenticado en mobile
//=======================================//=======================================
test('Render components users not autenticated in mobile', async () => {
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
    <HashRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </HashRouter>,
  )

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
    await screen.getAllByRole('link', { name: /Contribuye/i })[1],
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

  expect(await screen.queryByText(/Backoffice/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/LogOut/i)).not.toBeInTheDocument()
})

test('Render components users autenticated Admin in desktop', async () => {
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
    <HashRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </HashRouter>,
  )

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
    await screen.getAllByRole('link', { name: /Testimonios/i })[1],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Contribuye/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Campañas/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /LogOut/i })[0],
  ).toBeInTheDocument()
  expect(
    await screen.getAllByRole('link', { name: /Backoffice/i })[0],
  ).toBeInTheDocument()

  expect(await screen.queryByText(/Login/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/Register/i)).not.toBeInTheDocument()
  expect(await screen.queryByText(/Contacto/i)).not.toBeInTheDocument()
})
