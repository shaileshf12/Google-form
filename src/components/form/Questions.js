import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import EachQuestion from "./EachQuestion";

function Questions() {
  const id = useParams();
  const [title, setTitle] = useState("Untitled form");
  const [description, setDescription] = useState("");
  return (
    <div className="questions-main">
      <div className="questions">
      <div className="questions-header">
        <input className="input-title" value={title} />
        <input className="input-description" placeholder="Form description" />
      </div>
      <EachQuestion />
    </div>

    <div className="side-functions">
    <div className="add-functionality">
        <svg
        type="button"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </div>
    </div>
    </div>
  );
}

export default Questions;
