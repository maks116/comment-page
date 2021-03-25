import { createStore, applyMiddleware } from 'redux'
import myReducer from './myReducer'
import thunkMiddleware from 'redux-thunk'

let store = createStore(myReducer, applyMiddleware(thunkMiddleware))

export default store