/* @flow  */
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {defaultReducer} from './reducers'
import App from './components/App'

let store = createStore(defaultReducer,
                        window.devToolsExtension ? window.devToolsExtension() : f => f
)

render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ),
  document.getElementById('app')
)
