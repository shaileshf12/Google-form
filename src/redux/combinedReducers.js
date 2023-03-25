
import formReducer from "../redux/form/formReducer";
import {combineReducers} from 'redux'

export const rootReducer = combineReducers({
    form : formReducer
})