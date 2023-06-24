import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//////////////////////////
import React from 'react';
import { NavLink} from "react-router-dom";
import Navbar from "./navbar";
import ProdcutList2 from "./productList2";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {GiSpeedometer} from 'react-icons/gi'
import {GiAutomaticSas} from 'react-icons/gi'
import {GiCarSeat} from 'react-icons/gi'
import {BsPerson} from 'react-icons/bs'
import { Rating } from "@mui/material";
//////////////////////////
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


function ProductDetails(){
    const apiurl='https://car-mate-t012.onrender.com/api/v1/prodcuts';
    const params=useParams();
    const [product,setProduct]=useState([]);

    useEffect(()=>{
        const loadData =async () => {

        await fetch(`${apiurl}/${params.productId}`)
        .then((res)=>res.json())
        .then((product)=>setProduct(product.data))
        };
        loadData();
    },[params]);

console.log(product);

/////////////////////////////
const [showMore, setShowMore] = useState(false);
const text =`${product.Description}`;
/////////////////////////////
const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '33vh'
}
   return(
 <>
    <body className="bgmarket">
    <div>
      <Navbar />
    </div>
    <div className="cont">
      <h2 className="Marketheader p-0">Find your perfect item </h2>
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
      <NavLink to="/market">
        <button className="marketheadnav4 bg-primary" id='item'  >  All items</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlycars" >
        <button className="marketheadnav4" id='car'  >Cars</button>
    </NavLink>
      </li>
      <li className="nav-item " role="presentation">
      <NavLink to="/onlyaccessories" >
        <button className="marketheadnav4" id='access' >Accessories</button>
    </NavLink>
      </li>
      <li className="nav-item" role="presentation">
      <NavLink to="/onlyparts" >
        <button className="marketheadnav4" id='parts'  >Car parts</button>
    </NavLink>
      </li>
      <li className="nav-item marketheadnav33" role="presentation">
        <a className="marketheadna4" href="/market"><HiBarsArrowDown className="iconFilter"/></a>
      </li>
    </ul>
       <ProdcutList2 />
    </div>

        {/* ///////////////////////////////////////////////////////////// */}
        <div className="prodid">
          <form action=""> 
        <div className="part1">
            <h1> Product Details <h3 className="nameproduct"> {product.Name}</h3></h1>
          <div >
            {/* <Link className="prev" onclick="plusSlides(-1)>❮</Link>
            <Link className="next" onclick="plusSlides(1)">❯</Link> */}


            <div >
              <Slide>
                {product.Images?.map((slideImage, index)=> (
                  <div key={index}>
                    <div className="imagecover im" style={{ ...divStyle, 'backgroundImage': `url(${slideImage})`}}>
                    </div>
                  </div>
                ))} 
                </Slide>
                </div>
                {/* <img src={product.imageCover} className="card-img-top imagecover im" alt={product.Type} /> */}
                {/* <img src={product.Images[1]} className="card-img-top imagecover im" alt={product.Type} /> */}
          </div>
    
           <div className="dots">
             <span class="dot" onclick="currentSlide(1)"></span> 
             <span class="dot" onclick="currentSlide(2)"></span> 
             <span class="dot" onclick="currentSlide(3)"></span> 
           </div>
       
           <div className="nos">
              <div className="no1"><GiCarSeat className="iconI"/><p className=" text-white icontext ">4 Seats</p></div>
              <div className="no2"><GiAutomaticSas className="iconI"/><p className=" text-white icontext ">Automatic</p></div>
              <div className="no3"><GiSpeedometer className="iconI2"/><p className=" text-white icontext ">0-100 Kph<br/>32 s</p></div>
           </div>
           </div>
           <div className="part2">
             <h5>About</h5>
             <p>
               {showMore ? text : `${text.substring(0, 50)}`}
              <small className=" seemore"  onClick={() => setShowMore(!showMore)}>
              {showMore ? " (Show less)" : "...Show more"}
              </small>
             </p>
           </div>
           <div className="part3">
             <h5>Reviews</h5>
             <h5 className="rev1"><BsPerson className="revicon"/> <h6>Adly Michael</h6></h5>
             <p>I really like the atmosphere, good car, and nice interior<br/>
             <Rating className="pt-1 rating" name="read-only" value={product.RatingsAverage} precision={0.1} size="small" readOnly />
             </p>
             <hr/>
             <h5 className="rev1"><BsPerson className="revicon"/> <h6>Arsany Shafik</h6></h5>
             <p>I really like the atmosphere, good car, and nice interior<br/>
             <Rating className="pt-1 rating" name="read-only" value={product.RatingsAverage} precision={0.1} size="small" readOnly />
             </p>
             <hr/>
             <h5 className="rev1"><BsPerson className="revicon"/> <h6>Adly Michael</h6></h5>
             <p>I really like the atmosphere, good car, and nice interior<br/>
             <Rating className="pt-1 rating" name="read-only" value={product.RatingsAverage} precision={0.1} size="small" readOnly />
             </p>
             <hr/>
             <h5 className="rev1"><BsPerson className="revicon"/> <h6>Arsany Shafik</h6></h5>
             <p>I really like the atmosphere, good car, and nice interior<br/>
             <Rating className="pt-2 rating" name="read-only" value={product.RatingsAverage} precision={0.1} size="small" readOnly />
             </p>
           </div>
          <div className="part4 footerI">
           <h5 className="price">$ {product.Price}</h5>
           <button type="submit" className="buy">Add to cart</button>
          </div>
        </form>
        </div>
        </body>
        </>
        
        
    )
}
export default ProductDetails;