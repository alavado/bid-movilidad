import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import { Provider } from 'react-redux'
import store from './redux/store'
import moment from 'moment/min/moment-with-locales'
import { BrowserRouter as Router } from 'react-router-dom'

moment.locale('es')

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister()
