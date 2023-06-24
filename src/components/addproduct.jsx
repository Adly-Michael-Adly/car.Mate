import { useState } from "react";
import Navbar from "./navbar";
import { useLocation } from "react-router-dom";

function AddProduct(props){
const [name,setName] = useState("");
const [price,setPrice] = useState(0);
let location = useLocation();
let token='';
let userId='';
if(location?.state?.data?.props != null){
  token=location.state.data.props.token;
  userId=location.state.data.props.userId;
}
console.log(token);

  const formSubmit =(e)=>{
    e.preventDefault();
  fetch("https://car-mate-t012.onrender.com/api/v1/prodcuts/add",{
    method:"POST",
    headers:{
'Content-Type':'application/json',
'authorization': 'Bearer ' +token
    },
    body:JSON.stringify({
      Name:name,
      Price:price
    })
  })
  .then((res)=>res.json())
  .then((data)=>{console.log(data);})
  }
    return( 
<>
<body className="bgmarket">
   <div>
     <Navbar token={token} userId={userId}/>
   </div>
   <div className="cont">
   <h2 className="Marketheader p-0">Add New Product </h2>

   <form onSubmit={formSubmit}>
  <div className="form-group">

    <label htmlFor="exampleInputEmail1">
      Product's Name
      </label>

    <input 
    type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Enter Product's Name"
    onChange={(e)=>setName(e.target.value)}
    />
  </div>

  <div className="form-group">

    <label htmlFor="exampleInputEmail1">
      Product's Pice
      </label>

    <input 
    type="text" 
    className="form-control" 
    id="exampleInputEmail1" 
    aria-describedby="emailHelp" 
    placeholder="Enter Product's Price"
    onChange={(e)=>setPrice(e.target.value)}
    />
  </div>
 

  <button type="submit" className="btn btn-primary">Add</button>
</form>

   </div>
</body>
</>
    );
}
export default AddProduct; 