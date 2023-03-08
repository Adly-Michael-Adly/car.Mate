import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {

    return (
      <div className='home2'>
      <form>
        <h3 className='text-primary'>Sign Up</h3>
        <div className="mb-3">
          <label className='lab'>First Name</label>
          <input
            type="text"
            className="form-control mx-auto"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3 ">
          <label className='lab'>Last Name</label>
          <input type="text" className="form-control mx-auto" placeholder="Last name" required />
        </div>
        <div className="mb-3 ">
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control mx-auto"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3 ">
          <label className='lab'>Password</label>
          <input
            type="password"
            className="form-control mx-auto"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="but">
          <button type="submit" className="btnlog" id='button'>
           <span> Sign Up</span>
          </button>
        </div>
        <p className="forgot-password  but1">
          Already registered <a href="/sign-in" className='aa'>Log in?</a>
        </p>
      </form>
      </div>
    )
  }
}