/**
 *
 * entry point
 *
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'app/redux/store'

import App from 'app/App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/cobase-test">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
