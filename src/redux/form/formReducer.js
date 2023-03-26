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
import produce from "immer";

const initialState = {
  id : '',
  mainTitle: "Untitled form",
  title: "Untitled form",
  description: "",
  questions: [{
    id: "1234",
    name: "Untitled Question",
    type: "multiple_coice",
    required: false,
    options: [{ id: "123", name: "Option1" }],
  }]
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {

    case FORM_ID:
      return {
        ...state,
        id : action.payload
      }

    case SET_MAIN_TITLE:
      return {
        ...state,
        mainTitle: action.payload
      };

    case SET_TITLE:
      return {
        ...state,
        title: action.payload
      };

    case SET_DESCIPTION:
      return {
        ...state,
        description: action.payload,
      };

    case ADD_QUESTION:
      const i = state.questions.length
      return produce(state, (draftState)=>{
        if(i===0)
        {
          draftState.questions.push(action.payload)
          console.log(action.payload)
          return 
        }
        draftState.questions = draftState.questions.reduce((acc, que, j)=>{
            if(j===i-1)
            {
                acc.push(action.payload)
                acc.push(que)
                return acc;
            }
            acc.push(que)
            return acc;
        }, [])

    })

    case EDIT_QUESTION:
      return produce(state, (draftState) => {
        draftState.questions = draftState.questions.map((question) => {
          if (question.id === action.payload.id) {
            return action.payload;
          }
          return question;
        });
      });

    case DELETE_QUESTION:
      const id = action.payload;
      return produce(state, (draftState) => {
        draftState.questions = draftState.questions.filter((question) => {
          if (question.id === id) {
            return false;
          }
          return true;
        });
      });

    case ADD_DUPLICATE_QUESTION :
        const {prevId, question} = action.payload
        return produce(state, (draftState)=>{
            draftState.questions = draftState.questions.reduce((acc, que)=>{
                if(prevId===que.id)
                {
                    acc.push(question)
                    acc.push(que)
                    return acc;
                }
                acc.push(que)
                return acc;
            }, [])
        })

    default:
      return state;
  }
};

export default formReducer;
