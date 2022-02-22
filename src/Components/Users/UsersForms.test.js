import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserForm from './../../Components/Users/UsersForm'

describe('Tests in UserForm.js, checking for messages', () => {

  // Usuarios de ejemplo para las pruebas en el cual cada uno tiene caracteristicas diferentes,
  // de tal manera que se puedan testear los distintos mensajes de error en pantalla.

  // Usuario sin el campo name
  const usuario = {
    id: '1215',
    name: '',
    email: 'John@gmail.com',
    role_id: '1',
    description: 'Description text for examlple',
    photo: '',
  }
  // Usuario con el campo name incorrecto
  const usuario2 = {
    id: '1215',
    name: 'J',
    email: 'John@gmail.com',
    role_id: '1',
    description: 'Description text for examlple',
    photo: '',
  }
// Usuario con el campo email incorrecto
  const usuario3 = {
    id: '1215',
    name: 'John',
    email: 'John',
    role_id: '1',
    description: 'Description text for examlple',
    photo: '',
  }
// Usuario sin el campo role_id
  const usuario4 = {
    id: '1215',
    name: 'John',
    email: 'John',
    role_id: '',
    description: 'Description text for examlple',
    photo: '',
  }
// Usuario con el campo description incorrecto
  const usuario5 = {
    id: '1215',
    name: 'John',
    email: 'John',
    role_id: '1',
    description: 'text',
    photo: '',
  }

  test('Debe mostrar mensaje de Campo obligatorio', async () => {
    await waitFor(() => {
      render(<UserForm usuario={usuario} />)
    })

    userEvent.click(screen.getByText('Send'))

    expect(await screen.findByText('Campo obligatorio')).toBeInTheDocument()
  })

  test('Debe mostrar mensaje de Debe tener mínimo 4 caracteres', async () => {
    await waitFor(() => {
      render(<UserForm usuario={usuario2} />)
    })

    userEvent.click(screen.getByText('Send'))

    expect(
      await screen.findByText('Debe tener mínimo 4 caracteres'),
    ).toBeInTheDocument()
  })

  test('Debe mostrar mensaje de Debe ingresar un email valido', async () => {
    await waitFor(() => {
      render(<UserForm usuario={usuario3} />)
    })

    userEvent.click(screen.getByText('Send'))

    expect(
      await screen.findByText('Debe ingresar un email valido'),
    ).toBeInTheDocument()
  })

  test('Debe mostrar mensaje de Seleccione una opción', async () => {
    await waitFor(() => {
      render(<UserForm usuario={usuario4} />)
    })

    userEvent.click(screen.getByText('Send'))

    expect(await screen.findByText('Seleccione una opción')).toBeInTheDocument()
  })

  test('Debe mostrar mensaje de Debe tener mínimo 10 caracteres', async () => {
    await waitFor(() => {
      render(<UserForm usuario={usuario5} />)
    })

    userEvent.click(screen.getByText('Send'))

    expect(
      await screen.findByText('Debe tener mínimo 10 caracteres'),
    ).toBeInTheDocument()
  })

})
