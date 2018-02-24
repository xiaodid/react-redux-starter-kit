import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import createStore from './store/createStore'
// import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const store = createStore(window.__INITIAL_STATE__)
const routes = require('./routes').default(store)

const APP = (
  <Provider store={store}>
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  </Provider>
)
ReactDOM.render(APP, document.getElementById('root'))
// registerServiceWorker()
