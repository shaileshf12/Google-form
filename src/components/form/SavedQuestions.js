import React, { useState, useEffect, useRef} from "react";
import {useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import { editQuestion, deleteQuestion, addDuplicateQuestion} from "../../redux/form/formActions";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";


function SavedQuestions(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [flagForDate, setFlagForDate] = useState(true)
  const [queDetails, setQueDetails] = useState(props.question)

  const disaptch = useDispatch()

  const questionEditHandler = ()=>{
    setIsEditable(true)
  }

  const addQuestionName =(e)=>{
    setQueDetails({ ...queDetails, name: e.target.value });
  }

  const selectType = (e) =>{
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
  }

  const editOption = (e, id) => {
    const ar = queDetails.options.map((opt, j) => {
      if (opt.id === id) {
        opt.name = e.target.value;
        return opt;
      }
      return opt;
    });
    setQueDetails({ ...queDetails, options: [...ar] });
  }

  const removeOption = (e, id) =>{
    const ar = queDetails.options.filter((opt, j) => {
      return opt.id !== id;
    });
    setQueDetails({ ...queDetails, options: [...ar] });
  }

  const addOption = () =>{
    const id = Math.floor(Math.random() * 1000).toString();
    const ar = [...queDetails.options];
    setQueDetails({
      ...queDetails,
      options: [...ar, { id, name: `Option${ar.length + 1}` }],
    });
  }

  const addOther = () =>{
    const id = Math.floor(Math.random() * 1000).toString();
    const ar = [...queDetails.options];
    setQueDetails({ ...queDetails, options: [...ar, { id, name: "Other" }] });
  }

  const deleteCurrentQuestion = () => {
    console.log(queDetails.id)
    disaptch(deleteQuestion(queDetails.id))
  }

  const duplicateHandler = () =>{
    const newId = Math.floor(Math.random()*10000).toString()
    setIsEditable(false)
    const newQuestion = {...queDetails, id:newId}
    disaptch(addDuplicateQuestion(props.question.id, newQuestion))
  }

  const ref = useRef(null)

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true)

    return ()=>{
      document.removeEventListener('click', handleClickOutside, true)
    }
  })


  const handleClickOutside = (e) =>{
    if(ref.current && !ref.current.contains(e.target)){
      console.log(queDetails)
      setIsEditable(false)
      disaptch(editQuestion(queDetails))
    }
  }

  const [checked, setChecked] = React.useState(queDetails.required);

  const handleChange = (e) => {
    setChecked((prev) => !prev);
    setQueDetails({...queDetails, required : !checked})
  };

  return (
    <div>
      {!isEditable ? (
        <div type="button" className="saved-question" onClick={questionEditHandler}>
          <p>{queDetails.name}</p>
          {queDetails.type !== "date" ? (
            <ul>
              {queDetails.options.map((opt) => {
                return <li key={opt.id}>{opt.name}</li>;
              })}
            </ul>
          ) : (
            <p>{"dd/mm/yyyy"}</p>
          )}
        </div>
      ) : (
        <div ref={ref} className="questions-functionality">
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
              {flagForDate ? (
                queDetails.options.map((opt, i) => {
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
              ) : (
                <div>
                  <input
                    type="date"
                    className="option-input"
                    onChange={(e) => editOption(e, "123")}
                  />
                </div>
              )}
              {flagForDate && (
                <div>
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
                </div>
              )}
            </div>
            <div className="icons">
              <ContentCopyOutlinedIcon type="button" onClick={duplicateHandler}/>
              <DeleteOutlineOutlinedIcon type="button" onClick={deleteCurrentQuestion}/>
              <FormControlLabel
                  className="is-required"
                  control={<Switch checked={checked} onChange={handleChange} />}
                  label="Required"
                />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SavedQuestions;
