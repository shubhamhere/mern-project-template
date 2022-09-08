import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from "../images/logo.jpg"
import { UserContext } from "../App";
function Navbar() {
  const { state, dispatch } = useContext(UserContext)
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About You</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link logout" to="/logout">Logout</NavLink>
          </li>

        </>
      )
    }else{
      return (
        <>
           <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About You</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/signup">Registration</NavLink>
      </li>
     
        </>
      )
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <img src={logo} className=" imager d-inline-block align-top" alt="logo" />
        <NavLink className="navbar-brand" to="/">Shubham's Site</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">

            <RenderMenu />

          </ul>

        </div>
      </nav>
    </>
  )
}

export default Navbar
