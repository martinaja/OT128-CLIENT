import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserForm from './../../Components/Users/UsersForm'

describe('Tests in UserForm.js, checking for messages', () => {
  const usuario = {
    id: '1215',
    name: '',
    email: 'John@gmail.com',
    role_id: '1',
    description: 'Description text for examlple',
    photo: '',
  }

  const usuario2 = {
    id: '1215',
    name: 'J',
    email: 'John@gmail.com',
    role_id: '1',
    description: 'Description text for examlple',
    photo: '',
  }

  const usuario3 = {
    id: '1215',
    name: 'John',
    email: 'John',
    role_id: '1',
    description: 'Description text for examlple',
    photo: '',
  }

  const usuario4 = {
    id: '1215',
    name: 'John',
    email: 'John',
    role_id: '',
    description: 'Description text for examlple',
    photo: '',
  }

  const usuario5 = {
    id: '1215',
    name: 'John',
    email: 'John',
    role_id: '1',
    description: 'text',
    photo: '',
  }

  // const usuario6 = {
  //   id: '1215',
  //   name: 'John',
  //   email: 'John@gmail.com',
  //   role_id: '1',
  //   description: 'Description text for examlple',
  //   photo: '',
  // }

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

  // test('Debe mostrar mensaje de Datos procesados', async () => {
  //   await waitFor(() => {
  //     render(<UserForm usuario={usuario6} />)
  //   })

  //   userEvent.click(screen.getByText('Send'))

  //   expect(
  //     await screen.findByText('Datos procesados'),
  //   ).toBeInTheDocument()
  // })


})
