import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.jpeg'

function NavBar() {
  return (
    <>
      <Navbar className="nav" bg="white" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Forms
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
