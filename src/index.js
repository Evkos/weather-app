import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app'
import ErrorBoundry from './components/error-boundry'
import AccuweatherService from './services/accuweather-service'
import { AccuweatherServiceProvider } from './components/accuweather-service-context'

import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css';

const accuweatherService = new AccuweatherService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <AccuweatherServiceProvider value={accuweatherService}>
        <Router>
          <App/>
        </Router>
      </AccuweatherServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root'))


