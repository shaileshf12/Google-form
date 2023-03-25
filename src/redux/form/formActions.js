import { SET_MAIN_TITLE, SET_TITLE, SET_DESCIPTION, ADD_QUESTION, EDIT_QUESTION} from "./formTypes"

export const setMainTitle = (title) =>{
    return {
        type : SET_MAIN_TITLE,
        payload : title
    }
}

export const setTitle = (title) => {
    return {
        type : SET_TITLE,
        payload : title
    }
}

export const setDescription = (desc) => {
    return {
        type : SET_DESCIPTION,
        payload : desc
    }
}

export const addQuestion = (que) => {
    return {
        type : ADD_QUESTION,
        payload : que
    }
}

// export const editQuestion = (que) => {
//     return {
//         type : EDIT_QUESTION,
//         payload : que
//     }
// }