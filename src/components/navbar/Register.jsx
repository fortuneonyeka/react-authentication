import React from 'react'

const Register = () => {
  return (
    <form  className="col-4 mt-4">
      <h3 className="d-flex justify-content-center">Sign Up</h3>
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" placeholder="First Name"/>
        </div>

        <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" placeholder="Last Name"/>
        </div>

        <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Email@"/>
        </div>
        <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div className="form-group">
        <label>Confirm Password</label>
        <input type="password" className="form-control" placeholder="Confirm Password"/>
        </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="button" className="btn btn-primary btn-lg btn-block py-3">Register</button>
          </div>      
    
    </form>
  )
}

export default Register