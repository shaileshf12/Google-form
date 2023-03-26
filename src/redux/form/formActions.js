import {
  SET_MAIN_TITLE,
  SET_TITLE,
  SET_DESCIPTION,
  ADD_QUESTION,
  EDIT_QUESTION,
  DELETE_QUESTION,
  ADD_DUPLICATE_QUESTION,
  FORM_ID
} from "./formTypes";

export const addFormId = (id) => {
  return {
    type : FORM_ID,
    payload : id
  }
}

export const addMainTitle = (title) => {
  return {
    type: SET_MAIN_TITLE,
    payload: title,
  };
};

export const setTitle = (title) => {
  return {
    type: SET_TITLE,
    payload: title,
  };
};

export const setDescription = (desc) => {
  return {
    type: SET_DESCIPTION,
    payload: desc,
  };
};

export const addQuestion = (que) => {
  return {
    type: ADD_QUESTION,
    payload: que,
  };
};

export const editQuestion = (que) => {
  return {
    type: EDIT_QUESTION,
    payload: que,
  };
};

export const deleteQuestion = (id) => {
  return {
    type: DELETE_QUESTION,
    payload: id
  };
};

export const addDuplicateQuestion = (prevId, question) =>{
    return {
        type : ADD_DUPLICATE_QUESTION,
        payload : {prevId, question}
    }
}
