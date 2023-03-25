import React from 'react'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setDescription, addQuestion } from "../../redux/form/formActions";

function QuestionsHeader() {

  const id = useParams();
  const { title, description } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const titleHandler = (e) => {
    dispatch(setTitle(e.target.value));
  };

  const descHandler = (e) => {
    dispatch(setDescription(e.target.value));
  };
  return (
        <div className="questions-header">
          <input
            className="input-title"
            value={title}
            onChange={titleHandler}
          />
          <input
            className="input-description"
            value={description}
            placeholder="Form description"
            onChange={descHandler}
          />
        </div>
  )
}

export default QuestionsHeader