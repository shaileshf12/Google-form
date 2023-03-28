import React from 'react'
import { useState } from 'react';
import Form from "react-bootstrap/Form";

function ShowFormQuestions({question}) {

  const [multipleChoiceOption, setMultipleChoiceOption] = useState();
  const [date, setDate] = useState()

  const multipleChoiceHandler = (e) =>{
    setMultipleChoiceOption(e.target.value)
    console.log(e.target.value)
  }

  const checkboxHandler = (e) =>{
    console.log(e.target.checked)
  }

  const dropDownHandler = (e) =>{
    console.log(e.target.value)
  }

  const dateHandler = (e) =>{
    setDate(e.target.value)
  }


  return (
        <div key={question.id} className="question-ui">
                {question.required ? <p>{question.name}<span style={{color:'red'}}> *</span></p> : <p>{question.name}</p>}
              <div>
                {question.type === "multiple_choice" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.id}>
                          <input
                            id={option.id+"1"}
                            type="radio"
                            value={option.name}
                            checked={option.name === multipleChoiceOption}
                            onChange={multipleChoiceHandler}
                          />
                          <label className='form-optin-input' htmlFor={option.id+"1"}>{option.name}</label>
                        </div>
                      );
                    })}

                  {question.type === "checkboxes" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.id}>
                          <input id={option.id+"2"} type="checkbox" value={option.name} onChange={checkboxHandler}></input>
                          <label className='form-optin-input'  htmlFor={option.id+"2"}>{option.name}</label>
                        </div>
                      );
                    })}

                  {question.type === "dropdown" && (
                    <Form.Select aria-label="Default select example" onChange={dropDownHandler}>
                      {question.options.map((option) => {
                        return (
                          <option key={option.id} value={option.name}>{option.name}</option>
                        );
                      })}
                    </Form.Select>
                  )}

                  {question.type === "date" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.id}>
                          <input  id={option.id} type="date" value={date} onChange={dateHandler}></input>
                        </div>
                      );
                    })}
                </div>
              </div>
  )
}

export default ShowFormQuestions