import React, { useState, useEffect, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import { ReactDOM } from "react-dom";


function SavedQuestions(props) {
  const [isEditable, setIsEditable] = useState(false);
  const [flagForDate, setFlagForDate] = useState(true)
  const [queDetails, setQueDetails] = useState(props.question)

  const {questions} = useSelector((state)=>state.form)
  const disaptch = useDispatch()

  const ref = useRef(null)

  useEffect(()=>{
    // disaptch()
  },[])

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
      if (opt.id == id) {
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

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true)

    return ()=>{
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const handleClickOutside = (e) =>{
    if(ref.current && !ref.current.contains(e.target)){
      console.log("Clicked outside")
      setIsEditable(false)
    }
  }

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
      )}
    </div>
  );
}

export default SavedQuestions;
