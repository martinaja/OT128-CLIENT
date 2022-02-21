import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App2 from './App2'
import store from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App2 />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorker.unregister()
