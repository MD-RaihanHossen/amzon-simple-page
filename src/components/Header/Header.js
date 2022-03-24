import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
           <img src={logo} alt="" />
           <div>
               <a href="#s">Shopping</a>
               <a href="#o">Orders</a>
               <a href="#i">Invertory</a>
               <a href="#a">About</a>
           </div>

        </nav>
    );
};

export default Header;