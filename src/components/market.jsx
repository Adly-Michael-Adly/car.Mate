import Navbar from "./navbar";
import ProdcutList from "./productList";
import {HiBarsArrowDown} from 'react-icons/hi2'
import {BsSearch} from 'react-icons/bs'


function Market(){
 
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
                    <input className="search_input" type="text" placeholder="Search..."/>
                    <a className="search_icon" href="*"><BsSearch/></a>
                </div>
            </div>
        </div>
      </h2>
    {/* ///////////////////////////// */}
    <ul className="nav mt-5 ms-5 p-0 marketheadnav" id="pills-tab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="bg-primary marketheadnav2">All items</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="marketheadnav2" >Cars</button>
      </li>
      <li className="nav-item " role="presentation">
        <button className="marketheadnav2">Accessories</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="marketheadnav2">Car parts</button>
      </li>
      <li className="nav-item marketheadnav3" role="presentation">
        <a className="marketheadna4" href="/market"><HiBarsArrowDown className="iconFilter"/></a>
      </li>
    </ul>
        <ProdcutList />
        </div>
        </body>
        </>
    );
}
export default Market;