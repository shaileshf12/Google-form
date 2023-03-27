import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function ShowForm({ form }) {
  const [show, setShow] = useState(false);
  const [multipleChoiceOption, setMultipleChoiceOption] = useState();
  const [date, setDate] = useState()

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const multipleChoiceHandler = (e) =>{
    setMultipleChoiceOption(e.target.value)
    console.log(e.target.value)
  }

  const dateHandler = (e) =>{
    setDate(e.target.value)
  }

  return (
    <>
      <div className="each-form" onClick={handleShow}>
        {form.title}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{form.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {form.questions.map((question) => {
            return (
              <div key={question.id} className="question-ui">
                {question.required ? <p>{question.name}*</p> : <p>{question.name}</p>}
              <div>
                {question.type === "multiple_coice" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.id}>
                          <input
                            id={option.id}
                            type="radio"
                            value={option.name}
                            checked={option.name === multipleChoiceOption}
                            onChange={multipleChoiceHandler}
                          />
                          <label htmlFor={option.id}>{option.name}</label>
                        </div>
                      );
                    })}

                  {question.type === "checkboxes" &&
                    question.options.map((option) => {
                      return (
                        <div key={option.id}>
                          <input id={option.id} type="checkbox"></input>
                          <label htmlFor={option.id}>{option.name}</label>
                        </div>
                      );
                    })}

                  {question.type === "dropdown" && (
                    <Form.Select aria-label="Default select example">
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
                          <input id={option.id} type="date" value={date} onChange={dateHandler}></input>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ShowForm;
