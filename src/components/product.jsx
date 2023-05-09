<<<<<<< HEAD
import { useState } from "react";

const imageUrl = "https://car-mate-t012.onrender.com/public/img/Products/";
=======
import { Rating } from "@mui/material";
>>>>>>> 4509fc1 (Add existing project files to Git)
function Product(props){
  const {prodcut}=props;


<<<<<<< HEAD
  const [style, setStyle] = useState("card");
  async function Anima (){
      setStyle("card2");
     }

    return(
//<div  className="card">
<div  className={style} onClick={Anima}>
      <img src={imageUrl.concat(prodcut.imageCover)} className="card-img-top" alt={prodcut.Type} />
      <div className="card-body d-flex flex-column align-items-center text-center" >
        <h5 className="card-title namemarket">{prodcut.Name}</h5>
        <h5 className="card-title text-white namemarket">$ {prodcut.Price}</h5>
=======
    return(
<div  className="card">
      <img src={prodcut.imageCover} className="card-img-top imagecover" alt={prodcut.Type} />
      <div className="card-body d-flex flex-column align-items-center text-center pb-0" >
        <h5 className="card-title namemarket">{prodcut.Name}</h5>
        <h5 className="card-title text-white namemarket">$ {prodcut.Price}</h5>
        <Rating className="pt-2 rating" name="read-only" value={prodcut.RatingsAverage} precision={0.1} size="small" readOnly />
>>>>>>> 4509fc1 (Add existing project files to Git)
      </div>

      <div className="card-footer">
        <small className="text-white foter">
          <small className="float-end text-white foter mt-1">Quantity: {prodcut.Quantity}</small>
<<<<<<< HEAD
          <img src="Condition.png" className="mb-1" alt="Condition" />
=======
          <img src="/Condition.png" className="mb-1" alt="Condition" />
>>>>>>> 4509fc1 (Add existing project files to Git)
          {prodcut.Condition}
          </small>
      </div>
    </div> 


    );
}
export default Product;