import React from "react";
import QuestionsHeader from "./QuestionsHeader";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import SideFunctions from "./SideFunctions";
import { addQuestion, deleteQuestion, addDuplicateQuestion} from "../../redux/form/formActions";
import { useDispatch, useSelector } from "react-redux";
import SavedQuestions from "./SavedQuestions";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

function Questions() {

  const disaptch = useDispatch()

  const {questions} = useSelector((state)=>state.form)

  const [queDetails, setQueDetails] = useState(questions[questions.length-1])
  const addQuestionName = (e) => {
    setQueDetails({ ...queDetails, name: e.target.value });
  };

  const [flagForDate, setFlagForDate] = useState(true)

  const selectType = (e) => {
    if(e.target.value==='date')
    {
      setFlagForDate(false)
      
      setQueDetails({
        ...queDetails,
        options: []
      });
    }
    else{
      setFlagForDate(true)
    }
    setQueDetails({ ...queDetails, type: e.target.value });
  };

  const editOption = (e, id) => {
    // const ar = [...queDetails.options.slice(0, i), e.target.value, ...queDetails.options.slice(i+1)]
    const ar = queDetails.options.map((opt, j) => {
      if (opt.id == id) {
        opt.name = e.target.value;
        return opt;
      }
      return opt;
    });
    setQueDetails({ ...queDetails, options: [...ar] });
  };

  const addOption = () => {
    const id = Math.floor(Math.random() * 1000).toString();
    const ar = [...queDetails.options];
    setQueDetails({
      ...queDetails,
      options: [...ar, { id, name: `Option${ar.length + 1}` }],
    });
  };

  const addOther = () => {
    const id = Math.floor(Math.random() * 1000).toString();
    const ar = [...queDetails.options];
    setQueDetails({ ...queDetails, options: [...ar, { id, name: "Other" }] });
  };

  const removeOption = (e, id) => {
    const ar = queDetails.options.filter((opt, j) => {
      return opt.id !== id;
    });
    setQueDetails({ ...queDetails, options: [...ar] });
  };


  const addNewQuestion = () =>{
    const id = Math.floor(Math.random() * 10000).toString()

    if(questions.length==0)
    {
      disaptch(addQuestion({
        id : '1234',
        name: "Untitled Question",
        type: "multiple_coice",
        options: [{ id: "123", name: "Option1"}]
      }))
    }
    else{
    disaptch(addQuestion({...queDetails, id:id}))
    }
    console.log("Add new question") 
  }

  const deleteCurrentQuestion = () =>{
    console.log("Hello")
    disaptch(deleteQuestion(queDetails.id))
  }

  const duplicateCurrentQuestion = () =>{
    const newId = Math.floor(Math.random()*10000).toString()
    const newQuestion = {...queDetails, id:newId}
    disaptch(addDuplicateQuestion("1234", newQuestion))
  }

  return (
    <div className="questions-main">
      <div className="questions">
        <QuestionsHeader />
        {questions.length!==0 && questions.map((question, i)=>{
          if(i<questions.length-1)
          {
            return <SavedQuestions key={question.id} question={question}/>
          }
        })}


        {questions.length!==0 && <div className="questions-functionality">
          <div className="question-main">
            <div className="question-and-type">
              <input
                className="question-title"
                value={queDetails.name}
                placeholder="Question"
                onChange={addQuestionName}
              />
              <div>
                <Form.Select
                  aria-label="Default select example"
                  onChange={selectType}
                >
                  <option value="multiple_coice">Multiple Choice</option>
                  <option value="checkboxes">Checkboxes</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="date">Date</option>
                </Form.Select>
              </div>
            </div>

            <div className="options">
              {flagForDate ? queDetails.options.map((opt, i) => {
                return (
                  <div key={opt.id}>
                    <input
                      id={opt.id}
                      className="option-input"
                      value={opt.name}
                      onChange={(e) => editOption(e, opt.id)}
                    />
                    <CloseButton onClick={(e) => removeOption(e, opt.id)} />
                  </div>
                );
              }) 
              :
              <div>
                    <input
                      type="date"
                      className="option-input"
                      onChange={(e) => editOption(e, '123')}
                    />
              </div>

              }
              {flagForDate && <div>
                <button
                  type="button"
                  className="add-option"
                  onClick={addOption}
                >
                  Add option
                </button>{" "}
                or
                <button className="add-other" onClick={addOther}>
                  add "Other"
                </button>
              </div>}
            </div>
            <div className="icons">
             <ContentCopyOutlinedIcon type="button" onClick={duplicateCurrentQuestion}/>
             <DeleteOutlineOutlinedIcon type="button" onClick={deleteCurrentQuestion}/>

              {/* <div className="required-toggle">
            <div className="circle"></div>
            <div></div>
        </div> */}
            </div>
          </div>
        </div>}
      </div>
      <SideFunctions addQuestion={addNewQuestion} />
    </div>
  );
}

export default Questions;
