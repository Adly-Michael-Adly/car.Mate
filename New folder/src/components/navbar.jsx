// import  {Link}  from 'react-router-dom'
import { NavLink } from "react-router-dom";
import {BsShop} from 'react-icons/bs'
import {RxExit} from 'react-icons/rx'
import {FiUpload} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineCarRental} from 'react-icons/md'

function Navbar(){
  const activeLink = "";
  const normalLink = "text-white-50";

    return(
  <div className="nav nav-pills flex-column flex-sm-column pt-5 navigation">
   <div className="grid-container">
    <NavLink to="/market" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
      <BsShop className=" icon iconmarket" title="Market" />
    </NavLink>

      {/* <Link className="flex-md nav-link nav-link mb-4"  to="/market" >
        <img src="market2.png" className="imgsmarket1" alt="Market icon" />
        <BsShop className="iconmarket icon"/>
      </Link> */}

    <NavLink to="/about" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
         <BsPerson className="icon iconprofile" title="Profile"/>
    </NavLink>

      {/* <Link className="flex-md nav-link nav-link mb-4"  to="/market" >
        <img src="profile.png" className="imgsmarket2" alt="Profile icon" />
        <BsPerson className="iconprofile icon"/>
      </Link> */}

    <NavLink to="/popup" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <MdOutlineCarRental  className="icon iconcar" title="Rent"/> 
    </NavLink>

      {/* <Link className="flex-md nav-link nav-link mb-4"  to="/market" >
        <img src="car.png" className="imgsmarket3" alt="Car icon" />
        <MdOutlineCarRental  className="iconcar icon"/>
      </Link> */}

    <NavLink to="/addproduct" className={({ isActive }) => (isActive ? activeLink : normalLink)}>
        <FiUpload className="icon iconupload" title="App Product"/>
    </NavLink>

      {/* <Link className="flex-sm nav-link nav-link mb-5"  to="/addproduct" >
        <img src="Upload.png" className="imgsmarket4" alt="Upload icon" />
        <FiUpload className="iconupload icon"/>
      </Link>  */}

    <NavLink to="/" className={({ isActive }) => (isActive ? activeLink : normalLink)}  id="exit">
        <RxExit  className="iconexit" title="Exit"/>
    </NavLink>

      {/* <Link className="flex-lg-fill nav-link nav-link mt-5" to="/" >
        <img src="Exit.png" className="imgsmarket5" alt="Vector icon" />
        <RxExit  className="iconexit"/>
      </Link> */}
   </div>
  </div>

    );
}
export default Navbar;