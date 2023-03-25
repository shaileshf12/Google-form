import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useState} from "react";
import "./style.css";
import logo from "../../assets/logo.jpeg";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMainTitle } from "../../redux/form/formActions";
import { setTitle } from "../../redux/form/formActions";

function Header() {
  // const [mainTitle, setMainTitle] = useState("Untitled form");
  const dispatch = useDispatch()
  const {mainTitle, title} = useSelector((state)=>state.form)

  const state = useSelector((state)=>state.form)

  const mainTitleHandler = (e) =>{
    dispatch(setMainTitle(e.target.value))
  }

  const changeTitle = () =>{
    dispatch(setTitle(mainTitle))
  }

  return (
    <>
      <div className="header-main">
        <div className="form-title">
          <div>
            <Container>
              <Navbar.Brand>
                <img
                  alt=""
                  src={logo}
                  width="35"
                  height="35"
                  className="d-inline-block align-top"
                />{" "}
                <input  className="main-title-input" value={mainTitle} onChange={mainTitleHandler} onMouseEnter={changeTitle} />
              </Navbar.Brand>
            </Container>
          </div>
        </div>

        <div className="form-categories">
          <Link to="" className="link">Questions</Link>
          <Link to="responses" className="link">Responses</Link>
          <Link to="settings" className="link">Settings</Link>
        </div>
        
      </div>
      <Outlet/>
    </>
  );
}

export default Header;
