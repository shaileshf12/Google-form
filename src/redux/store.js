import {createStore} from 'redux'
import { rootReducer } from './combinedReducers'

export const store = createStore(rootReducer)
