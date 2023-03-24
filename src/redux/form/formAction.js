
import { SET_MAIN_TITLE } from "./formTypes"

export const getMainTitle = (title) =>{
    return {
        type : SET_MAIN_TITLE,
        payload : title
    }
}