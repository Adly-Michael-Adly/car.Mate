import React from 'react'
// import  { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'

function App() {
  
    //  const [style, setStyle] = useState("left");
  
    //   const change=()=>{
    //     setStyle=("left2");
    //   };
      
  return (
    

    <Router>
      <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>

          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        
    </Router>
  )
}

export default App