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

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useHistory: () => ({
    goBack: jest.fn(),
    go: jest.fn(),
  }),
}))

const mockData = {
  id: 1535,
  name: 'novedad',
  content:
    '<p>ONG dedicada a la educación busca recolectar fondos para niños y niñas afectados por el covid en El Milagro</p>',
  image: 'http://ongapi.alkemy.org/storage/D3JXQZbuTc.jpeg',
  category_id: 1669,
}

const fetchGetNews = jest.fn(getNews)
// const fetchPutNews = jest.fn(putNews)
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

  // localStorage.setItem(
  //   'token',
  //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9vbmdhcGkuYWxrZW15Lm9yZ1wvYXBpXC9sb2dpbiIsImlhdCI6MTY0MDIwMTkyOSwiZXhwIjoxNjQwMjA1NTI5LCJuYmYiOjE2NDAyMDE5MjksImp0aSI6InB2Q052aUxRQUFMdVhWcEoiLCJzdWIiOjExNjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.EOXvZwy3JZZ1wciFnxC4f4F7iLdqJIG7vGMV--s9rVc',
  // )
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

test('Fields must be valitated', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: undefined })

  await waitFor(() => {
    render(<NewsForm />)
  })
  userEvent.click(await screen.findByText(/crear noticia/i))
  expect(
    await screen.findByText(/la noticia debe tener un título/i),
  ).toBeInTheDocument()
  expect(
    await screen.findByText(/No podés enviar una noticia sin cuerpo/i),
  ).toBeInTheDocument()
  expect(await screen.findByText(/Imagen requerida/i)).toBeInTheDocument()
  expect(await screen.findByText(/Categoría requerida/i)).toBeInTheDocument()
})

test('Render content when is editing a new', async () => {
  jest.spyOn(Router, 'useParams').mockReturnValue({ newsId: 1535 })
  await waitFor(() => {
    return render(<NewsForm />)
  })
  // console.log('container', container)
  fetchGetNews.mockResolvedValue({
    data: {
      data: mockData,
    },
  })
  expect(screen.getByLabelText(/Título/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Imagen/i)).toBeInTheDocument()
  expect(screen.getByTestId(/CKEditor/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument()

  expect(await screen.findByTestId(/imagen/i)).toHaveAttribute(
    'src',
    mockData.image,
  )
  expect(await screen.findByLabelText(/name/i)).toHaveValue(mockData.name)

  // // screen.debug()
  // expect(screen.).toHaveValue(mockData.name)

  // expect(await screen.findByText(mockData.content)).toBeInTheDocument()
  // expect(screen.getByLabelText(/Categoría/i)).toHaveValue(mockData.category_id)
})

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
