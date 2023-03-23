// import React, { Component } from 'react'
import  React,{ useState } from 'react';
function SignUp() {
 
  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Email.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
  const [style, setStyle] = useState("right");
// }
// export default class SignUp extends Component {
//   render() {
    
    return (
      <div className="App" id='parent'>
      <p className='imgbk'></p>
        
        <div className="" id="left">

          <div className="carbg">
              <img id="pic1" src="/Blue.png"/>
          </div>

          <div className="car">
               <img  className="pic2" src="/carblue.png"/>
          </div>
            
        </div>

      
      
        <div className=" row d-flex justify-content-center align-items-center" id={style}>
      <div className='home2'>
      <form>
        <h3 className='text-primary'>Create Account</h3>
        <div className="mb-3">
          <label className='lab'>Name</label>
          <input
            type="text"
            className="form-control mx-auto"
            placeholder="Enter your name"
            name="username"
            value={input.username}
          onChange={onInputChange}
          onBlur={validateInput}
            required
          />
           {error.username && <span className='err'>{error.username}</span>}
        </div>
        <div className="mb-3 ">
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control mx-auto"
            placeholder="Enter your email"
            name="email"
            value={input.email}
          onChange={onInputChange}
          onBlur={validateInput}
            required
          />
                   {error.email && <span className='err'>{error.email}</span>}
        </div>
        <div className="mb-3 ">
          <label className='lab'>Phone Number</label>
          <input type="tel" className="form-control mx-auto" placeholder="Enter your number"  
          pattern="[0-9]{11}"
          />
        </div>
        <div className="mb-3 ">
          <label className='lab'>Password</label>
          <input
            type="password"
            id="password"
            className="form-control mx-auto"
            placeholder="Enter password"
            name="password"
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
            {error.password && <span className='err'>{error.password}</span>}
        </div>
        <div className="mb-3 ">
          <label className='lab'>Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            className="form-control mx-auto"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}
            required
          />
          {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
 
        </div>
        <div className="but">
          <button type="submit" className="btnlog" id='button' onClick={()=>setStyle("right2")}>
           <span> Sign Up</span>
          </button>
        </div>
        <p className="forgot-password  but1">
          Already registered <a href="/sign-in" className='aa'>Log in?</a>
        </p>
      </form>
      </div>
      </div>
      </div>

    )
    }

export default SignUp;