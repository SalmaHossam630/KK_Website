import React, { useState } from 'react';
import'./Navbar.css'
import logo from '../assets/logo.png'
//import list_icon from '../assets/list.png'
const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-list_icon'>
        <img src={logo} alt=""></img>
      <div>
        <ul className='nav-menu'>
          <li onClick={()=>{setMenu("Home")}}>Home<hr></hr></li>
          <li onClick={()=>{setMenu("menu")}}>menu</li>
          <li onClick={()=>{setMenu("shop")}}>shop</li>
          <li>kk store</li>
        </ul>
<a href="#">
  <i className='fas fa-shopping-cart'></i>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet"></link>
  
  </a> 
  <div className='nav-cart-count'>0</div>
      </div>
<p></p>
      </div>
    </div>
  );
}

export default Navbar;
