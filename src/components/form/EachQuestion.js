import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";

function EachQuestion() {
  const [questionTitle, setQuestionTitle] = useState("Untitled Question");
  const [option, setOption] = useState("Option 1");
  return (
    <div className="questions-functionality">
      <div className="question-main">
        <div className="question-and-type">
          <input value={questionTitle} className="question-title" />
          <div>
            <Form.Select aria-label="Default select example">
              <option value="1">Multiple Choice</option>
              <option value="2">Checkboxes</option>
              <option value="3">Dropdown</option>
              <option value="3">Date</option>
            </Form.Select>
          </div>
        </div>

        <div className="options">
          <input value={option} className="option" />
          <div>
            <button type="button" className="add-option">
              Add option
            </button>{" "}
            or
            <button className="add-other">add "Other"</button>
          </div>
        </div>
        <div className="icons">
          <svg
            type="button"
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-files"
            viewBox="0 0 16 16"
          >
            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
          </svg>
          <svg
            type="button"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>

          {/* <div className="required-toggle">
            <div className="circle"></div>
            <div></div>
        </div> */}
        </div>
      </div>

      
    </div>
  );
}

export default EachQuestion;
