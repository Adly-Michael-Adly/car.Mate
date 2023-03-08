import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'

function App() {
  return (
    

    <Router>
      <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<p className='imgbk'></p>
      <div className="App" id='parent'>
        
        <div className="" id='left'>

          <div className="carbg">
              <img id="pic1" src="/Blue.png"/>
          </div>

          <div className="car">
               <img  className="pic2" src="/carblue.png"/>
          </div>
            
        </div>

        <div className=" row d-flex justify-content-center align-items-center" id='right'>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
        </div>
    </Router>
  )
}
export default App