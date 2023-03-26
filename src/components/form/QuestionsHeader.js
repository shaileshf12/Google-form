import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { setTitle, setDescription} from "../../redux/form/formActions";

function QuestionsHeader() {

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