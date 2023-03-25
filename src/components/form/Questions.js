import React from "react";
import QuestionsHeader from "./QuestionsHeader";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import SideFunctions from "./SideFunctions";
import { addQuestion } from "../../redux/form/formActions";
import { useDispatch, useSelector } from "react-redux";
import SavedQuestions from "./SavedQuestions";

function Questions() {

  const disaptch = useDispatch()

  const [queDetails, setQueDetails] = useState({
    id : '',
    name: "Untitled Question",
    type: "multiple_coice",
    options: [{ id: "123", name: "Option1" }],
  });

  const {questions} = useSelector((state)=>state.form)

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
    setQueDetails({...queDetails, id} )
    disaptch(addQuestion(queDetails))
    setQueDetails({
      id : '',
      name: "Untitled Question",
      type: "multiple_coice",
      options: [{ id: "123", name: "Option1" }],
    })
  }

  return (
    <div className="questions-main">
      <div className="questions">
        <QuestionsHeader />
        {questions.length!==0 && questions.map((question)=>{
         return <SavedQuestions key={question.id} question={question}/>
        })}
        <div className="questions-functionality">
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
              <svg
                type="button"
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
              </svg>
              <svg
                type="button"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
              </svg>

              {/* <div className="required-toggle">
            <div className="circle"></div>
            <div></div>
        </div> */}
            </div>
          </div>
        </div>
      </div>
      <SideFunctions addQuestion={addNewQuestion} />
    </div>
  );
}

export default Questions;
