import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import thunk from 'redux-thunk'
import { searchReducer as reducer } from './reducer/searchReducer'

const middleware = composeWithDevTools(applyMiddleware(thunk, createLogger()))
const store = createStore(reducer, middleware)

export default store