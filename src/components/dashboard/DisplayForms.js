import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearForm } from "../../redux/form/formActions";


function DisplayForms() {
  const formData = useSelector((state) => state.form);
  
  const finalData = {
    ...formData,
    questions: formData.questions.slice(0, formData.questions.length - 1),
  };

  

  const dispatch = useDispatch();
  const [allForms, setAllForms] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allFormsData"));
    if (!data) {
      localStorage.setItem("allFormsData", JSON.stringify([]));
    } else if (finalData.questions.length > 0) {
      data.push(finalData);
      
      localStorage.setItem("allFormsData", JSON.stringify(data));
    }

    if (data !== null) {
      setAllForms(data);
    }

    dispatch(clearForm());
  }, []);

  const formHandler = (id) =>{
    navigate(`form/${id}`)
  }

  return (
    <>
      {allForms.length !== 0 &&
        allForms.map((form) => {
          return (
            <div key={form.id} className="each-form" onClick={()=>formHandler(form.id)}>
              <p className="form-name">
              {form.title}
              </p>
            </div>
          );
        })}
    </>
  );
}

export default DisplayForms;
