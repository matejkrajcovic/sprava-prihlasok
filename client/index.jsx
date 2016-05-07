/* @flow  */
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, compose, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {defaultReducer} from './reducers'
import {shallowFetch} from './actions'
import App from './components/App'

const loggerMiddleware = createLogger()

let store = createStore(defaultReducer,
                        compose(
                          applyMiddleware(
                            thunkMiddleware,
                            loggerMiddleware
                          ),
                          window.devToolsExtension ? window.devToolsExtension() : (f) => f
                        )
)

store.dispatch(shallowFetch(10))

render((
  <Provider store={store}>
    <App />
  </Provider>
  ),
  document.getElementById('app')
)
