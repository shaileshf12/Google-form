import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
import "./style.css";
import logo from "../../assets/logo.jpeg";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addMainTitle,
  setTitle,
  addFormId,
} from "../../redux/form/formActions";

function Header() {
  const [mainTitle, setMainTitle] = useState("Untitled form");
  const [formInput, setFormInput] = useState(true);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(addFormId(id));
  }, []);

  const mainTitleHandler = (e) => {
    setMainTitle(e.target.value);
    setFormInput(true);
  };

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      if(mainTitle.length===0)
      {
        setMainTitle('Untitled form')
        dispatch(addMainTitle(mainTitle));
        dispatch(setTitle("Untitled form"));
      }
      else
      {
        dispatch(addMainTitle(mainTitle));
        dispatch(setTitle(mainTitle));
      }
      setFormInput(false);
    }
  };


  const linkHandler = (e) => {
    console.log(e.target.id);
  };

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
                {formInput ? (
                  <input
                    ref={ref}
                    className="main-title-input"
                    value={mainTitle}
                    onChange={mainTitleHandler}
                  />
                ) : (
                  <input
                    className="main-title-input"
                    value={mainTitle}
                    onChange={mainTitleHandler}
                  />
                )}
              </Navbar.Brand>
            </Container>
          </div>
        </div>

        <div className="form-categories">
          <NavLink
            to="questions"
            className="link"
            onClick={linkHandler}
            style={({isActive})=>isActive?{borderBottom:"5px solid black", color:"#4c2b87"}:{}}
          >
            Questions
          </NavLink>
          <NavLink
            to="responses"
            className="link"
            onClick={linkHandler}
            style={({isActive})=>isActive?{borderBottom:"5px solid black", color:"#4c2b87"}:{}}
          >
            Responses
          </NavLink>
          <NavLink
            to="settings"
            className="link"
            onClick={linkHandler}
            style={({isActive})=>isActive?{borderBottom:"5px solid black", color:"#4c2b87"}:{}}
          >
            Settings
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
