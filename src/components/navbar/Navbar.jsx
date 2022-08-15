import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <a href="" className="navbar-brand nav-item">
            Home
          </a>
          <div className="collapse navbar-collapse d-flex justify-content-end pr-3">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="" className="nav-link">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="" className="nav-link">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
          <div className="auth-inner">
            <h2>you are not logged in</h2>
          </div>
      </div>
    </div>
  )
}

export default Navbar