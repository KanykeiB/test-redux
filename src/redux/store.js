import {createStore} from 'redux'
import {composeWithDevTools} from "redux-devtools-extension"
import { cashReducer } from './cash/reducer'
import { counterReducer } from './counter/reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    cashReducer,
    counterReducer
})



export const store = createStore(rootReducer, composeWithDevTools())