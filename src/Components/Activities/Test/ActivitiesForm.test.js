// app.test.js
import { render, waitFor, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Router from 'react-router-dom'
// import { App, LocationDisplay } from './app'

import {
  getPrivateHandler,
  postPrivateHandler,
} from '../../../Services/BaseHTTP/privateApiService'
import { getPublicHandler } from '../../../Services/BaseHTTP/publicApiService'
import ActivitiesForm from '../ActivitiesForm';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useHistory: () => ({
    goBack: jest.fn(),
    go: jest.fn(),
  }),
}))

jest.mock('../../../Services/BaseHTTP/privateApiService', () => ({
  getPrivateHandler: jest.fn(),
  postPrivateHandler: jest.fn(),
}))

jest.mock('../../../Services/BaseHTTP/publicApiService', () => ({
  getPublicHandler: jest.fn(),
}))

const mockData = {
  id: '1544',
  name: 'titulo',
  slug: null,
  content: '<p>Lorem ipsum dolor sit</p>',
  image: 'http://ongapi.alkemy.org/storage/1L6O89iM1S.jpeg',
  user_id: null,
  category_id: '1665',
  created_at: '2022-02-20T06:24:59.000000Z',
  updated_at: '2022-02-20T06:24:59.000000Z',
  deleted_at: null,
  group_id: '36',
}

// Permite acceder a privateHandler
beforeEach(() => {
  localStorage.setItem('token', 'token')
})

// Renderiza el componente cuando no se le pasa ningún parámetro por url (creación de noticias). Comprueba que todos los campos del formulario estén siendo mostrados en pantalla.
test('Render content when is creating a news', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })
  await waitFor(() => {
    render(<ActivitiesForm />)
  })

  expect(screen.getByLabelText(/Título/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Imagen/i)).toBeInTheDocument()
  expect(screen.getByTestId(/CKEditor/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument()
})

// Renderiza el componente cuando no se le pasa ningún parámetro por url (creación de noticias). Comprueba que se visualicen los helpers de los campos obligatorios del formulario al hacer click en submit.
test('Fields must be valitated', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })

  await waitFor(() => {
    render(<ActivitiesForm />)
  })
  userEvent.click(await screen.findByText(/crear actividad/i))
  expect(
    await screen.findByText(/la actividad debe tener un título/i),
  ).toBeInTheDocument()
  expect(
    await screen.findByText(/no podés enviar una actividad sin cuerpo/i),
  ).toBeInTheDocument()
  expect(await screen.findByText(/imagen requerida/i)).toBeInTheDocument()
  expect(await screen.findByText(/categoría requerida/i)).toBeInTheDocument()
})

// Renderiza el componente cuando no se le pasa ningún parámetro por url (creación de noticias). Comprueba que el usuario pueda completar los datos del formulario exitosamente /escribir un título, escribir el contenido y seleccionar categoría e imagen.
test('Should complete form', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })

  getPrivateHandler.mockImplementation(() => {
    return Promise.resolve({
      data: {
        success: true,
        data: [
          {
            id: '1669',
            name: 'Prueba 4',
            description: '<p>sucudrule</p>',
            image: 'http://ongapi.alkemy.org/storage/AzfwClSQKY.png',
          },
        ],
      },
    })
  })

  await waitFor(() => {
    render(<ActivitiesForm />)
  })

  userEvent.click(await screen.findByRole('button', { name: /categoría ​/i }))
  userEvent.click(screen.getByRole('option', { name: /prueba 4\-1669/i }))

  userEvent.type(
    screen.getByRole('textbox', {
      name: /rich text editor, main/i,
    }),
    'Este es el contenido',
  )

  userEvent.type(
    screen.getByTestId(/ttitle/i).querySelector('input'),
    'Este es el título',
  )

  const file = new File(['hello'], 'hello.png', { type: 'image/png' })
  userEvent.upload(screen.getByTestId(/tuploadimg/i), file)

  userEvent.click(await screen.findByText(/crear actividad/i))

  expect(
    screen.getByRole('textbox', {
      name: /rich text editor, main/i,
    }),
  ).toHaveTextContent('Este es el contenido')
  expect(screen.getByTestId(/ttitle/i).querySelector('input')).toHaveValue(
    'Este es el título',
  )
  expect(screen.getByTestId(/tcategory/i).querySelector('input')).toHaveValue(
    '1669',
  )
})

// Renderiza el componente cuando se le pasa ningún parámetro por url (creación de actividades). Comprueba que los campos del formulario se autocompleten exitosamente.
// test('Render content when is editing a activities', async () => {
//   jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: 1544 })
//   getPrivateHandler.mockImplementation(() => {
//     return Promise.resolve({
//       data: {
//         success: true,
//         data: [
//           {
//             id: '1665',
//             name: 'asdlkghsldn',
//             description: '<p>hkljasdlkgjalsd</p>',
//             image: 'http://ongapi.alkemy.org/storage/8Ga3FPcEHA.png',
//           },
//         ],
//       },
//     })
//   })

//   getPublicHandler.mockImplementation(() => {
//     return Promise.resolve({
//       data: {
//         success: true,
//         data: [
//           {
//             id: '1544',
//             name: 'titulo',
//             content: '<p>Lorem ipsum dolor sit</p>',
//             image: 'http://ongapi.alkemy.org/storage/1L6O89iM1S.jpeg',
//             category_id: '1665',
//           },
//         ],
//       },
//     })
//   })

//   await waitFor(() => {
//     render(<NewsForm />)
//   })

//   expect(await screen.findByTestId(/timg/i)).toHaveAttribute(
//     'src',
//     mockData.image,
//   )

//   expect(
//     screen.getByRole('textbox', {
//       name: /rich text editor, main/i,
//     }),
//   ).toHaveTextContent(mockData.content)

//   expect(screen.getByTestId(/ttitle/i).querySelector('input')).toHaveValue(
//     mockData.name,
//   )

//   expect(screen.getByTestId(/tcategory/i).querySelector('input')).toHaveValue(
//     mockData.category_id.toString(),
//   )
// })