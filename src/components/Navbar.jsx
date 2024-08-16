import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';
import { assets } from './../assets/assets';
import './Navbar/Navbar.css';



const Navbar = ({setShowLogin}) => {
    const [type,setType]=useState("home");
    const {getTotalCartAmount}=useContext(StoreContext);
  return (
    <div className='navbar'>
       <Link to='/' ><img src={assets.logo} alt="" className="log" /></Link>
       <ul className="navbar-type">
        <Link to="/" onClick={()=>setType("home")} className={type==="home"?"active":""}>Home</Link>
        <a href= "#explore-type" onClick={()=>setType("product")} className={type==="type"?"active":""}>Products</a>
        <a href="#app-download" onClick={()=>setType("mobile-app")} className={type==="mobile-app"?"active":""}>Mobile App</a>
        <a href="#footer" onClick={()=>setType("contact-us")} className={type==="contact-us"?"active":""}>Contact Us</a>
       </ul>
       <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
<div className="navbar-search-icon">
    <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
    <div className={getTotalCartAmount()===0?"":"dot"}>

    </div>
</div>
<button onClick={()=>setShowLogin(true)}>sign in</button>
       </div>
    </div>
  )
}

export default Navbar