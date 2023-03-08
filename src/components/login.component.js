import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  render() {

    return (
      <div className='home'>
      <form  className='formlogin'>
        <h3 className='text-primary'>Log In</h3>
        <div className='block'>
        <div className="mb-3">
          
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control mx-auto"
            placeholder="Enter email"
            required
          />
          
        </div>
        
        <div className="mb-3">
          <label className='lab'>Password</label>
          <input
            type="password"
            className="form-control mx-auto"
            placeholder="Enter password"
            required
          />
        </div>
        </div>
          
        <div className="mb-3">
          <div className="custom-control custom-checkbox lab">
            <input
              type="checkbox"
              className="checkbox custom-control-input "
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          <div className='forgdiv'>
        <p className="forget">
           <a className='' href="*">Forget your password?</a>
        </p>
        </div>
          </div>
        </div>
        <div>
          <button type="submit" className='btnlog' id='button'>
            <span> Log in </span> 
          </button>
        </div>
       
        <div className="but1">
          <p >Need an account? &nbsp;
          <Link className="aa" to={'/sign-up'}>
                Sign up
            </Link>
           </p>
        </div>
       
       
        
      </form>
      </div>
    )
  }
}