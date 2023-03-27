import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useState, useRef, useEffect} from "react";
import "./style.css";
import logo from "../../assets/logo.jpeg";
import { Link, Outlet, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMainTitle, setTitle, addFormId } from "../../redux/form/formActions";

function Header() {
  const [mainTitle, setMainTitle] = useState("Untitled form");
  const [formInput, setFormInput] = useState(true)
  const dispatch = useDispatch()
  
  const {id} = useParams()

  useEffect(()=>{
    dispatch(addFormId(id))
  },[])

  const mainTitleHandler = (e) =>{
    setMainTitle(e.target.value)
    setFormInput(true)
  }

  const ref = useRef(null)

  useEffect(()=>{
    document.addEventListener('click', handleClickOutside, true)

    return ()=>{
      document.removeEventListener('click', handleClickOutside, true)
    }
  })


  const handleClickOutside = (e) =>{
    if(ref.current && !ref.current.contains(e.target)){
      dispatch(addMainTitle(mainTitle))
      dispatch(setTitle(mainTitle))
      setFormInput(false)
    }
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
                {formInput ? <input ref={ref} className="main-title-input" value={mainTitle} onChange={mainTitleHandler}/>
                :
                <input className="main-title-input" value={mainTitle} onChange={mainTitleHandler}/>
                }
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
