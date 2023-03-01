import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import logo from'./Blue.png';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid h-custom">

        <div className="row d-flex justify-content-center align-items-center ">

          <div className="col-md-9 col-lg-6 col-xl-6  picContainer">
          <div className='row'>
              <img className="pic1" id="pic1" src={logo}/>
               <img  className="col-md-6 pic2" src="/carblue.png"/>
             
                </div>
            
          </div>
          
          <div className="col-md-8 col-lg-6 col-xl-5 offset-xl-1 my-lg-5 py-lg-5">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
        </div>
      </div>
    </Router>
  )
}
export default App