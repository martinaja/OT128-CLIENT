// import { render, screen, waitFor } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { postHandler } from '../../Services/BaseHTTP/publicApiService'
// import { postActivity } from '../../Services/apiServices/activitiesApiService';
// import ActivitiesForm from './ActivitiesForm';

// //=======================================//=======================================
// //Se crea un objeto con los datos que posteriormente llenarán los formularios
// //=======================================//=======================================
// const dataForm = {
//   name: 'test',
//   description: 'correo2@correo.com',
//   image: 'logo.png',
//   message: 'esto es un test nuevo',
// }

// //=======================================//=======================================
// //Se renderiza el componente ContactForm
// //=======================================//=======================================
// beforeEach(() => {
//   render(<ActivitiesForm />)
// })

// //=======================================//=======================================
// //Se hace un mock de la función postContact para simular la petición post de axios
// //=======================================//=======================================
// const postContactMock = jest.fn(postActivity)
// jest.mock('../../Services/BaseHTTP/publicApiService', () => ({
//   postHandler: jest.fn(),
// }))

// //=======================================//=======================================
// //Se comprueba que el título formulario de contacto se muestre correctamente
// //=======================================//=======================================
// test('Render title component', () => {
//   const title = screen.getByText(/formulario de contacto./i)
//   expect(title).toBeInTheDocument()
// })

// //=======================================//=======================================//=======================================
// //Se prueba que al pulsar el boton "send" sin ningun valor en los campos se muestre correctamente los errores correspondientes
// //=======================================//=======================================//=======================================
// test('Send form without information should show error messages', async () => {
//   const button = screen.getByRole('button', { name: /send/i })
//   userEvent.click(button)
//   expect(
//     await screen.findByText('El campo description es obligatorio'),
//   ).toBeInTheDocument()
//   expect(
//     await screen.findByText('El campo image es obligatorio'),
//   ).toBeInTheDocument()
 
//   expect(await screen.findByText('Ingrese su mensaje')).toBeInTheDocument()
//   expect(postContactMock).toHaveBeenCalledTimes(0)
// })

// //=======================================//=======================================
// //Se simula a un usuario cargando todos los campos con los datos de dataForm,
// //y lo que sucede al recibir una respuesta succcess = false desde la api
// //=======================================//=======================================
// test('Should display the error message when try to send the form and fail ', async () => {
//   postHandler.mockImplementation(() => {
//     return { data: { success: false } }
//   })

//   const nameInput = await screen.getByPlaceholderText(/nombre/i)
//   const descriptionInput = await screen.getByPlaceholderText(/descripcion/i)
//   const imageInput = await screen.getByPlaceholderText(/imagen/i)
//   const msgInput = await screen.getByPlaceholderText(/mensaje/i)

//   userEvent.type(nameInput, dataForm.name)
//   userEvent.type(descriptionInput, dataForm.description)
//   userEvent.type(imageInput, dataForm.image)
//   userEvent.type(msgInput, dataForm.message)

//   const button = screen.getByRole('button', { name: /send/i })
//   userEvent.click(button)
//   await waitFor(async () => {
//     expect(
//       await screen.findByText(
//         'se produjo un error al intentar enviar su formulario de contacto. Por favor, intente nuevamente mas tarde.',
//       ),
//     ).toBeInTheDocument()
//   })
// })

// //=======================================//=======================================
// //Se simula a un usuario cargando todos los campos con los datos de dataForm,
// //y lo que sucede al recibir una respuesta succcess = true desde la api
// //=======================================//=======================================
// test('Should display a success message when correctly send the form ', async () => {
//   postHandler.mockImplementation(() => {
//     return { data: { success: true } }
//   })

//   const nameInput = await screen.getByPlaceholderText(/nombre/i)
//   const descriptionInput = await screen.getByPlaceholderText(/descripcion/i)
//   const imageInput = await screen.getByPlaceholderText(/imagen/i)
//   const msgInput = await screen.getByPlaceholderText(/mensaje/i)

//   userEvent.type(nameInput, dataForm.name)
//   userEvent.type(descriptionInput, dataForm.description)
//   userEvent.type(imageInput, dataForm.image)
//   userEvent.type(msgInput, dataForm.message)

//   const button = screen.getByRole('button', { name: /send/i })
//   userEvent.click(button)
//   await waitFor(async () => {
//     expect(
//       await screen.findByText('Los datos se enviaron correctamente'),
//     ).toBeInTheDocument()
//   })
// })
