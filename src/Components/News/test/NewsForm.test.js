// app.test.js
import {
  render,
  waitFor,
  screen,
  within,
  getByTestId,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Router from 'react-router-dom'
// import { App, LocationDisplay } from './app'
import NewsForm from '../NewsForm'
import { getNews, postNews } from '../../../Services/apiServices/newsApiService'
import { getCategories } from '../../../Services/apiServices/categoriesApiService'
import { act } from 'react-dom/test-utils'
import {
  getPrivateHandler,
  postPrivateHandler,
} from '../../../Services/BaseHTTP/privateApiService'
import { Provider } from 'react-redux'
import store from '../../../app/store'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useHistory: () => ({
    goBack: jest.fn(),
    go: jest.fn(),
  }),
}))

const getCategoriesMock = jest.fn(getCategories)
const postNewsMock = jest.fn(postNews)

jest.mock('../../../Services/BaseHTTP/privateApiService', () => ({
  getPrivateHandler: jest.fn(),
  postPrivateHandler: jest.fn(),
}))

const mockData = {
  id: 1535,
  name: 'asdaasd',
  content: 'asdasdasd',
  image: 'http://ongapi.alkemy.org/storage/lGUCfSRfzq.jpeg',
  category_id: 1669,
}

beforeEach(() => {
  localStorage.setItem(
    'token',
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTY0MDIwMTkyOSwiZXhwIjoxNjQwMjA1NTI5LCJuYmYiOjE2NDAyMDE5MjksImp0aSI6InB2Q052aUxRQUFMdVhWcEoiLCJzdWIiOjExNjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.EOXvZwy3JZZ1wciFnxC4f4F7iLdqJIG7vGMV--s9rVc',
  )
})

test('Render content when is creating a new', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })
  await waitFor(() => {
    render(<NewsForm />)
  })

  expect(screen.getByLabelText(/Título/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Imagen/i)).toBeInTheDocument()
  expect(screen.getByTestId(/CKEditor/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument()
})

test('Fields must be valitated (post)', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })

  await waitFor(() => {
    render(<NewsForm />)
  })
  userEvent.click(await screen.findByText(/crear noticia/i))
  expect(
    await screen.findByText(/la noticia debe tener un título/i),
  ).toBeInTheDocument()
  expect(
    await screen.findByText(/no podés enviar una noticia sin cuerpo/i),
  ).toBeInTheDocument()
  expect(await screen.findByText(/imagen requerida/i)).toBeInTheDocument()
  expect(await screen.findByText(/categoría requerida/i)).toBeInTheDocument()
})

test('Render content when is editing a news', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: 1535 })
  await waitFor(() => {
    render(<NewsForm />)
  })
  await getPrivateHandler.mockImplementation(() => {
    return Promise.resolve({
      data: {
        success: true,
        data: [
          {
            id: '1669',
            name: 'Prueba 4',
            description: '<p>gasdasfgasas</p>',
            image: 'http://ongapi.alkemy.org/storage/AzfwClSQKY.png',
            parent_category_id: null,
            created_at: '2022-02-11T02:31:07.000000Z',
            updated_at: '2022-02-15T11:48:37.000000Z',
            deleted_at: null,
            group_id: 36,
          },
        ],
      },
    })
  })
  expect(screen.getByTestId(/imagen/i)).toHaveAttribute('src', mockData.image)

  expect(
    screen.getByRole('textbox', {
      name: /rich text editor, main/i,
    }),
  ).toHaveTextContent(mockData.content)

  expect(screen.getByTestId(/titulo/i).querySelector('input')).toHaveValue(
    mockData.name,
  )

  expect(screen.getByTestId(/categoria/i).querySelector('input')).toHaveValue(
    mockData.category_id.toString(),
  )
})

test('Should post data', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })

  await getPrivateHandler.mockImplementation(() => {
    return Promise.resolve({
      data: {
        success: true,
        data: [
          {
            id: '1669',
            name: 'Prueba 4',
            description: '<p>gasdasfgasas</p>',
            image: 'http://ongapi.alkemy.org/storage/AzfwClSQKY.png',
            parent_category_id: null,
            created_at: '2022-02-11T02:31:07.000000Z',
            updated_at: '2022-02-15T11:48:37.000000Z',
            deleted_at: null,
            group_id: 36,
          },
        ],
      },
    })
  })

  await waitFor(() => {
    render(<NewsForm />)
  })

  userEvent.click(await screen.findByRole('button', { name: /categoría ​/i }))

  userEvent.click(screen.getByRole('option', { name: '1669' }))

  userEvent.type(
    screen.getByRole('textbox', {
      name: /rich text editor, main/i,
    }),
    'Este es el contenido',
  )

  userEvent.type(
    screen.getByTestId(/titulo/i).querySelector('input'),
    'Este es el título',
  )

  const file = new File(['hello'], 'hello.png', { type: 'image/png' })
  userEvent.upload(screen.getByTestId(/subirImagen/i), file)

  userEvent.click(await screen.findByText(/crear noticia/i))

  userEvent.click(await screen.findByText(/crear noticia/i))

  expect(
    screen.getByRole('textbox', {
      name: /rich text editor, main/i,
    }),
  ).toHaveTextContent('Este es el contenido')

  expect(screen.getByTestId(/titulo/i).querySelector('input')).toHaveValue(
    'Este es el título',
  )

  expect(screen.getByTestId(/categoria/i).querySelector('input')).toHaveValue(
    '1669',
  )

  // await postPrivateHandler.mockImplementation(() => {
  //   return Promise.resolve({
  //     data: {
  //       success: true,
  //     },
  //   })
  // })
})
