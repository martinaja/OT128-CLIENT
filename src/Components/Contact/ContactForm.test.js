import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  postContact,
  contactService,
} from '../../Services/apiServices/contactApiService'
import { ContactForm } from './ContactForm'
import { postHandler } from '../../Services/BaseHTTP/publicApiService'

const dataForm = {
  name: 'test',
  email: 'correo2@correo.com',
  phone: '3434139005',
  message: 'esto es un test nuevo',
}

beforeEach(() => {
  render(<ContactForm />)
})

const postContactMock = jest.fn(postContact)
jest.mock('../../Services/BaseHTTP/publicApiService', () => ({
  postHandler: jest.fn(),
}))

test('Render title component', () => {
  const title = screen.getByText(/formulario de contacto./i)
  expect(title).toBeInTheDocument()
})

test('Send form without information should show error messages', async () => {
  const button = screen.getByRole('button', { name: /send/i })
  userEvent.click(button)
  expect(
    await screen.findByText('El campo nombre es obligatorio'),
  ).toBeInTheDocument()
  expect(
    await screen.findByText('El campo email es obligatorio'),
  ).toBeInTheDocument()
  expect(
    await screen.findByText('Numero de telefono obligatorio'),
  ).toBeInTheDocument()
  expect(await screen.findByText('Ingrese su mensaje')).toBeInTheDocument()
  expect(postContactMock).toHaveBeenCalledTimes(0)
})

test('Should display the error message when try to send the form and fail ', async () => {
  postHandler.mockImplementation(() => {
    return { data: { success: false } }
  })

  const nameInput = await screen.getByPlaceholderText(/nombre/i)
  const emailInput = await screen.getByPlaceholderText(/email/i)
  const phoneInput = await screen.getByPlaceholderText(/telefono/i)
  const msgInput = await screen.getByPlaceholderText(/mensaje/i)

  userEvent.type(nameInput, dataForm.name)
  userEvent.type(emailInput, dataForm.email)
  userEvent.type(phoneInput, dataForm.phone)
  userEvent.type(msgInput, dataForm.message)

  const button = screen.getByRole('button', { name: /send/i })
  userEvent.click(button)
  await waitFor(async () => {
    expect(
      await screen.findByText(
        'se produjo un error al intentar enviar su formulario de contacto. Por favor, intente nuevamente mas tarde.',
      ),
    ).toBeInTheDocument()
  })
})

test('Should display a success message when correctly send the form ', async () => {
  postHandler.mockImplementation(() => {
    return { data: { success: true } }
  })

  const nameInput = await screen.getByPlaceholderText(/nombre/i)
  const emailInput = await screen.getByPlaceholderText(/email/i)
  const phoneInput = await screen.getByPlaceholderText(/telefono/i)
  const msgInput = await screen.getByPlaceholderText(/mensaje/i)

  userEvent.type(nameInput, dataForm.name)
  userEvent.type(emailInput, dataForm.email)
  userEvent.type(phoneInput, dataForm.phone)
  userEvent.type(msgInput, dataForm.message)

  const button = screen.getByRole('button', { name: /send/i })
  userEvent.click(button)
  await waitFor(async () => {
    expect(
      await screen.findByText('Los datos se enviaron correctamente'),
    ).toBeInTheDocument()
  })
})
