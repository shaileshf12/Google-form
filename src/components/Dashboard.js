import React from "react";
import NavBar from "./NavBar";
import plus from '../assets/plus.png'
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate()

  const id = Math.floor(Math.random()*100000000)

  const createNewForm = () =>{
    navigate(`${id}`)
  }

  return (
    <div className="dashboard-main">
      <NavBar />
      <div className="forms-main-box">
        <div className="forms-inner-box">
            <div className="new-form-title">Start a new form</div>
            <div className="forms">
                <button className="new-form" onClick={createNewForm}>
                    <img className="plus" alt="Add" src={plus}/>
                </button>
                <div className="created-forms">

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
