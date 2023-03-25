
import { SET_MAIN_TITLE, SET_TITLE, SET_DESCIPTION, ADD_QUESTION, EDIT_QUESTION} from "./formTypes";

const initialState = {
    mainTitle: 'Untitled form',
    title : 'Untitled form',
    description : '',
    questions : []
}

const formReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_MAIN_TITLE:return {
            ...state,
            mainTitle : action.payload
        }

        case SET_TITLE : return {
            ...state,
            title : action.payload
        }

        case SET_DESCIPTION : return {
            ...state,
            description : action.payload
        }

        case ADD_QUESTION : return {
            ...state,
            questions : [...state.questions, action.payload]
        }

    
        default:
            return state
    }
}

export default formReducer