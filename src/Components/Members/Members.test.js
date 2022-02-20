import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import MembersForm from './MembersForm'
import { Provider } from 'react-redux'
import store from '../../app/store'
import { CKEditor } from '@ckeditor/ckeditor5-react'

beforeEach(async () => {
  await waitFor(() => {
    render(
      <Provider store={store}>
        <MembersForm />
      </Provider>,
    )
  })
})

test('Render title component', () => {
  //component rendering
  // render(
  //   <Provider store={store}>
  //     <MembersForm />
  //   </Provider>,
  // )
  const title = screen.getByText(/crear miembro/i) //search elements for your attribute
  expect(title).toBeInTheDocument() //finds it
})
