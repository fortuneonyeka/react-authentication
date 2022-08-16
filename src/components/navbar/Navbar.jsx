import React from 'react'
import Home from "../Home"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <Link to="/" className="navbar-brand nav-item">
            Home
          </Link>
          <div className="collapse navbar-collapse d-flex justify-content-end pr-3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
          <div className="auth-inner">
            <Home/>
          </div>
      </div>
    </div>
  )
}

export default Navbar