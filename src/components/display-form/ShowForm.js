import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.jpeg";
import ShowFormQuestions from "./ShowFormQuestions";

function ShowForm({ form }) {
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("allFormsData"));
  const [formdata, setFormData] = useState({});
  
  useEffect(() => {
    data.forEach((element) => {
      if (element.id === id) {
        setFormData(element);
      }
    });
  }, []);

  
  return (
    <div>
      {Object.keys(formdata).length !== 0 && (
      <div className="show-form-main">  
        <div className="showform-header">
          <div className="">
            <Container className="container">
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <span className="main-title">{formdata.mainTitle}</span>
            </Container>
          </div>

          <div className="form-categories">
        
        </div>
        </div>

        <div className="show-form-body">
          <div className="show-form-title">
          <h3>{formdata.title}</h3>
          <div>{formdata.description}</div>
          </div>

          <div className="form-questions">
          {formdata.questions.map((question)=>{
            return <ShowFormQuestions key={question.id} question={question}/>
          })}
        </div>
        </div>

        </div>
      )}
    </div>
  );
}

export default ShowForm;
