import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { searchReducer, initialState } from './store/reducer/searchReducer'
import App from './App'
import reportWebVitals from './reportWebVitals'

import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({})
const store = createStore(searchReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

console.log('store', store.getState())

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
