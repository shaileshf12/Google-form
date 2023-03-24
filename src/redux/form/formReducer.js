
import { SET_MAIN_TITLE } from "./formTypes";

const intialState = {
    mainTitle: ''
}

const formReducer = (state=intialState, action) =>{
    switch (action.type) {
        case SET_MAIN_TITLE:return {
            ...state,
            mainTitle : action.payload
        }
    
        default:
            break;
    }
}

export default formReducer