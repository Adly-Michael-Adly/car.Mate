import { useEffect, useState } from "react";
import Product from "./product";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";

>>>>>>> 4509fc1 (Add existing project files to Git)
function ProdcutList(){
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const [prodcuts,setProducts]=useState([]);
    useEffect(() =>{
      fetch(apiurl)
      .then((res) =>res.json())
      .then((data)=>setProducts(data))
    },[]);
    console.log(prodcuts.product);
    

    return(
        <> 

<<<<<<< HEAD
<div className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards ">
    {prodcuts.product?.map((prodcut) =>{
        return(
            <div className="col cardp" key={prodcut._id}  >
                <Product prodcut={prodcut}   />
=======
<div id="cards" className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards ">
    {prodcuts.product?.map((prodcut) =>{
        return(
            <div className="col cardp" key={prodcut._id}  >
                <Link to={`/product/${prodcut._id}`}  className="noink" >
                 <Product prodcut={prodcut}/>
                 </Link>
>>>>>>> 4509fc1 (Add existing project files to Git)
            </div>
        )
    })}

  </div>
</>
    );
}
export default ProdcutList;