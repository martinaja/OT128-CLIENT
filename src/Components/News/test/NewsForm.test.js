// app.test.js
import {
  render,
  waitFor,
  screen,
  wait,
  waitForElementToBeRemoved,
  queryByText,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Router from 'react-router-dom'
// import { App, LocationDisplay } from './app'
import NewsForm from '../NewsForm'
import { getNews, putNews } from '../../../Services/apiServices/newsApiService'
import { getCategories } from '../../../Services/apiServices/categoriesApiService'
import { act } from 'react-dom/test-utils'

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useHistory: () => ({
    goBack: jest.fn(),
    go: jest.fn(),
  }),
}))

const mockData = {
  id: 1536,
  name: 'otra prueba',
  content: 'prueba 123',
  image: 'http://ongapi.alkemy.org/storage/ipyPTvCPXG.jpeg',
  category_id: 1665,
}

const fetchGetNews = jest.fn(getNews)
const fetchPutNews = jest.fn(putNews)
const fetchGetCategories = jest.fn(getCategories)

beforeEach(() => {
  fetchGetCategories.mockReturnValue({
    data: {
      data: [
        {
          id: 1402,
          name: 'Partners',
          description: 'Testing redux',
          image: 'http://ongapi.alkemy.org/storage/9TAHHq64hc.png',
          parent_category_id: null,
          created_at: '2021-12-27T21:29:37.000000Z',
          updated_at: '2021-12-28T19:49:49.000000Z',
          deleted_at: null,
          group_id: null,
        },
      ],
    },
  })
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

test('Render content when is editing a new', async () => {
  fetchGetNews.mockResolvedValue({
    data: {
      data: mockData,
    },
  })
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: 1536 })
  await waitFor(() => {
    render(<NewsForm />)
  })

  expect(await screen.findByTestId(/imagen/i)).toHaveAttribute(
    'src',
    mockData.image,
  )
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
  const btnEdit = await screen.findByTestId('boton')

  expect(btnEdit).toHaveTextContent(/editar noticia/i)

  act(() =>
    userEvent.click(screen.findByRole('button', { name: /clickeame/i })),
  )

  // userEvent.click(btnEdit.querySelector('button'))

  // screen.debug()
  expect(await screen.findByText('Click')).toBeInTheDocument()
  // expect(fetchPutNews).toHaveBeenCalled()
})

// test('should allow submit if the form was completed (put)', async () => {
//   fetchGetNews.mockResolvedValue({
//     data: {
//       data: mockData,
//     },
//   })
//   jest.spyOn(Router, 'useParams').mockReturnValue({ id: 1535 })
//   await waitFor(() => {
//     render(<NewsForm />)
//   })
//   expect(screen.findByTestId('boton')).toHaveTextContent(/editar noticia/i)
// expect(await screen.findByTestId('boton')).toBeInTheDocument()

// userEvent.click(await screen.findByText('Editar noticia'))

// await act(async () => {
//   userEvent.click(
//     await screen.findByRole('button', { name: /editar noticia/i }),
//   )
// })
// expect(fetchPutNews).toHaveBeenCalled()
// })

// primer test

// beforeEach(async () => {
//   await waitFor(() => {
//     render(<NewsForm />)
//   })
// })

// test('should render component', async () => {
//   const title = screen.getByText(/novedades/i)
//   expect(title).toBeInTheDocument()
// })

// test('full app rendering/navigating', () => {
//   const history = createMemoryHistory()
//   history.push('/backoffice/news/create')
//   render(
//     <Router history={history}>
//       <NewsForm />
//     </Router>,
//   )
//   // verify page content for expected route
//   // often you'd use a data-testid or role query, but this is also possible
//   expect(screen.getByText(/Novedades/i)).toBeInTheDocument()
// })
