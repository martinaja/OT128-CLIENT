API Request :

Axios instance, baseUrl and token authorization in privateApiService

Api Handlers:

GetHandle
Use

import { GetHandle } from ....

const {apiResponse} = GetHandle('apiEndPoint, id') // (apiEndPoint:Obligatory, id:optional)

return a response object ={
data: ...,
errors: ...  
}

PostHandle
Use

import { PostHandle } from ....

const {apiResponse} = PostHandle('apiEndPoint', bodyData) // (apiEndPoint:Obligatory, bodyData:obligatory)

return a response object ={
data: ...,
errors: ...  
}

# Ong Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### CircularProgress API
API documentation for the React CircularProgress component. Learn about the available props and the CSS API.
https://mui.com/api/circular-progress/#props
https://mui.com/api/circular-progress/#css

API documentation for the React CircularProgress component. Learn about the available props and the CSS API.
If the progress bar is describing the loading progress of a particular region of a page, you should use aria-describedby to point to the progress bar, and set the aria-busy attribute to true on that region until it has finished loading.
https://mui.com/api/circular-progress/

Component name
The name MuiCircularProgress can be used when providing default props or style overrides in the theme. https://mui.com/customization/theme-components/#default-props https://mui.com/customization/theme-components/#global-style-overrides

Demos
https://mui.com/api/circular-progress/#:~:text=a%20custom%20theme.-,Demos,Progress,-Chip

### Alerts

To be able to view alerts in a standardized way.
An alert service was created.
Using the library: sweetAlert https://www.npmjs.com/package/sweetalert2-react.

Type of Alerts:

1. Confirmation
   Function:  
    alertServiceConfirm(title, confirmButtonText)
   parameters
   • Title a string is passed with the text it will be the explanation of the action to be confirmed (“string”) can use html (“<strong>Seguro</strong> quiere borrar el archivo”)
   • confirmButtonText A string is passed that will be inside the button both in the button of the first alert and in the second confirming the action
   • If this second parameter is not passed by default, the first button will be Confirmar and the second alert will say Hecho. And the second button will be No Confirmar the second alert will say “No se han Hecho Cambios”

2. Error
   Funcion:  
    alertServiceError(title, text)
   parameters
   • Title a string is passed with the text ("string") you can pass html ("<strong> HTML <u> example </u> </strong>")
   • Text a string is passed with the text ("string") you can pass html ("<strong> HTML <u> example </u> </strong>")

3. Information
   Funcion:
   alertServiceInfoTimer(position, icon, title, showConfirmButton, timer)
   parameters
   • Position where will the popup window will be display. Default Center
   options 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'. (“string”).
   • Icon Default Undefined options 'warning', 'error', 'success', 'info', and 'question' (“string”).
   • Title a string is passed with the text ("string") you can pass html ("<strong> HTML <u> example </u> </strong>")
   • ShowConfirmButton default is true.
   If false is set, the confirmation button will not be shown to close the window (Boolean)..
   • Timer default undefined a time is set in milliseconds after which the popup window will close. (number).
   Modo de usarla importar la funcion

import { alertServiceError, alertServiceInfoTimer, alertServiceSimple } from '../Alert/AlertService'

use the function with the described parameters

<button onClick={() => alertServiceInfoTimer('top-end', 'success', "<strong>HTML <u>example</u></strong> <b>bold text</b>", false, 2000)}>alertServiceTimer</button>

In the project directory, you can run:

### `yarn start`

