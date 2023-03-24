import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useState} from "react";
import "./style.css";
import logo from "../../assets/logo.jpeg";
import { Link, Outlet } from "react-router-dom";

function Header() {
  const [mainTitle, setMainTitle] = useState("Untitled form");


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
                <input value={mainTitle} className="main-title-input" />
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
