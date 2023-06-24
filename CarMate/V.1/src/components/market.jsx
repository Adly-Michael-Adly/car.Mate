import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from "./navbar";
// import ProdcutList from "./productList";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {BsSearch} from 'react-icons/bs'
import { useEffect, useState } from "react";
import Product from "./product";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


function Market(){
  function show_hide(){
    var click =document.getElementById("list-items");
    var click2 =document.getElementById("rotate");
    if (click.style.display==="block"){
      click.style.display="none";
      click2.style.transform= "rotatex(0deg)";
    }else{
      click.style.display="block"
      click2.style.transform= "rotatex(180deg)";
    }}
////////////SORT//////////////
const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
const [tempList,setTempList]=useState([]);
const [searchApiData, setSearchApiData] = useState([]);
const [filterVal, setFilterVal] = useState('');
useEffect(() =>{
    fetchData()
},[]);
const fetchData=()=>{
    fetch(apiurl)
    .then((res) =>res.json())
    .then(json=>{
      setTempList(json.product)
      setSearchApiData(json.product)
  })
}
const ascendingEvent=()=>{
    let data=[...tempList]
    if(data.length > 0){
       let result= data.sort((a,b)=> a.Price - b.Price)
       setTempList(result)
    }}
const descendingEvent=()=>{
    let data=[...tempList]
    if(data.length > 0){
       let result= data.sort((a,b)=> b.Price - a.Price)
       setTempList(result)
    }
}
const descendingRating=()=>{
    let data=[...tempList]
    if(data.length > 0){
       let result= data.sort((a,b)=> b.RatingsAverage - a.RatingsAverage)
       setTempList(result)
    }
}
//////////SEARCH FILTER/////////////
const onChaneHandle=(e)=>{
  if(e.target.value === ""){
      setTempList(searchApiData)
  }else{
      const serarchRessult=searchApiData.filter(item => item.Name.toLowerCase().includes(e.target.value.toLowerCase()) ||  item.Condition.toLowerCase().includes(e.target.value.toLowerCase()))
      setTempList(serarchRessult);
  }
  setFilterVal(e.target.value)
}
///////////DELETE///////////////////
let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzVhNGJjYTU4M2IwMDA0ZTAwZWU1YiIsImlhdCI6MTY4NzQ3MDg3OSwiZXhwIjoxNjk1MjQ2ODc5fQ.3OLkR_FslNpqEXWYAXybODmSElsZVkJTbTziQreBrSg";
console.log(token);


const deleteProduct =(Product)=>{
  Swal.fire({
    title:`Are You Sure Delete (${Product.Name})?!`,
    showCancelButton:true
  })
  .then((data)=>{if(data.isConfirmed){
    // fetch(`https://car-mate-t012.onrender.com/api/v1/prodcuts/${Product._id}`,{
    fetch(`https://car-mate-t012.onrender.com/api/v1/prodcuts/`,{
      method:"DELETE",
      headers:{
        'Contect-Type':'application/json',
        'authorization': 'Bearer ' + token
            },
    })
    .then((res)=>res.json())
    .then((data)=>{console.log(data);
      fetchData()
    })
  }
})
}

  return(
  <>
  <body className="bgmarket">
    <div>
    <Navbar />
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Find your perfect item 
        <div class="Marketheader2">
            <div class="d-flex justify-content-center p-3 h-100">
                <div class="searchbar">
                <input type="search" className="search_input"  placeholder="Search..." value={filterVal} onInput={(e)=>onChaneHandle(e)}/>
                   <BsSearch className="search_icon"/>
                </div>
            </div>
        </div>
      </h2>
   {/* ///////////////////////////////////// */}
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
      <NavLink to="/market">
        <button className="marketheadnav2 bg-primary" id='item'  >  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlycars" >
        <button className="marketheadnav2" id='car'  >Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink to="/onlyaccessories" >
        <button className="marketheadnav2" id='access' >Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlyparts" >
        <button className="marketheadnav2" id='parts'  >Car parts</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation" title="Sort">
        {/* <a className="marketheadna4" href="*"><HiBarsArrowDown className="iconFilter"/></a> */}
        <div className='dropdown'>
       <button onClick={show_hide} id="rotate" className="nav-item marketheadnav3 "><HiBarsArrowDown className="iconFilter"/></button>
          <center>
            <div id='list-items'>
              <button onClick={descendingEvent}>Price: High to Low</button>
              <button onClick={ascendingEvent}>Price: Low to High</button>
              <button onClick={descendingRating}>Rating: High to Low</button>
            </div>
          </center>
            </div>
      </li>
    </ul>
          {/* ////////////////////////// */}
          <div id="cards" className="row row-cols-1 col-lg row-cols-md-3 g-5 m-5 cards ">

          {tempList && tempList.length > 0 && tempList !== undefined ? tempList.map((item,i) =>{
        return(
             <div className="col cardp" key={item._id}  >
               <button className='pull-right btn-close btn-close-white' onClick={()=>deleteProduct(item)} aria-label='close'></button>
                 <Link to={`/product/${item._id}`}  className="noink" >
                  <Product prodcut={item}/>
               </Link>

             </div>
        )
    }) : "NO DATA"
}
  </div>
          {/* ////////////////////////// */}
    {/* <ProdcutList /> */}
        
        </div>
        </body>
        </>
    );
  }
export default Market;