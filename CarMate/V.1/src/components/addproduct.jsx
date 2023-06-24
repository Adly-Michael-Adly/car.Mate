import { useState } from "react";
import Navbar from "./navbar";

function AddProduct(props){
const [name,setName] = useState("");
const [price,setPrice] = useState(0);

let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzVhNGJjYTU4M2IwMDA0ZTAwZWU1YiIsImlhdCI6MTY4NzQ3MDg3OSwiZXhwIjoxNjk1MjQ2ODc5fQ.3OLkR_FslNpqEXWYAXybODmSElsZVkJTbTziQreBrSg";
console.log(token);

  const formSubmit =(e)=>{
    e.preventDefault();
  fetch("https://car-mate-t012.onrender.com/api/v1/prodcuts/add",{
    method:"POST",
    headers:{
'Contect-Type':'application/json',
'authorization': 'Bearer ' + token
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
     <Navbar />
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