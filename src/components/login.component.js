import { useNavigate, Link } from 'react-router-dom'
import  React,  { useState } from 'react';

function Login(){
  const [style, setStyle] = useState("left");
  const [style2, setStyle2] = useState("imgs");
  
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const navigate = useNavigate();
    async function Anima (){
      setStyle("left2");
      setStyle2("imgs2");
      await delay(2100);
        navigate("/sign-up")
     }

    return (
      
      
      <div className="App" id='parent'>
      <p className='imgbk'></p>
        
        <div className="" id={style2}>

          <div className="carbg">
              <img id="pic1" src="/Blue.png" alt='icon'/>
          </div>

          <div className="car">
               <img  className="pic2h" src="/carblue.png" alt='car'/>
          </div>
            
        </div>

      
      
        <div className=" row d-flex justify-content-center align-items-center" id={style}>
         
       
        <div className='home'>

       <form  className='formlogin'>
       <marquee direction="down" behavior="slide" scrollamount="5">
         <h3 className='text-primary title'>Log In</h3>
       </marquee>

        <div className='block'>

        <marquee direction="down" behavior="slide" scrollamount="10">
        <div className="mb-1">
          <label className='lab'>Email Address</label>
          <input
            type="email"
            className="form-control m-auto"
            placeholder="Enter email"
            required
          />
        </div>
        </marquee>

        <marquee direction="down" behavior="slide" scrollamount="10">
        <div className="mb-1">
          <label className='lab'>Password</label>
          <input
            type="password"
            className="form-control m-auto"
            placeholder="Enter password"
            required
          />
        </div>
        </marquee>

        </div>

        <marquee direction="down" behavior="slide" scrollamount="5" >
        <div className="mb-1">
          <div className="custom-control custom-checkbox lab">
            <input
              type="checkbox"
              className="checkbox custom-control-input rmei"
              id="customCheck1"
              
            />
            <label className="custom-control-label rme" For="customCheck1">
              Remember me
            </label>

           <div className='forgdiv'>
              <p className="forget">
                <a className='' href="*">Forget your password?</a>
              </p>
           </div>
          </div>
        </div>
        </marquee>

        <marquee direction="up" behavior="slide">
        <div>
          <button type="submit" className='btnlog' id='button'>
            <span> Log in </span> 
          </button>
        </div>
        </marquee>

        <marquee direction="left" behavior="slide" scrollamount="35">
        <div className="but1">
          <p >Need an account? <Link onClick={Anima} className="aa">Sign up</Link>
           </p>
        </div>
        </marquee>

       </form>
      </div>
      </div>
      </div>
      
      
    )
    }
export default Login