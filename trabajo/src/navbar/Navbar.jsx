import React from 'react';
import './Navbar.css'
import { FaSearch, FaShoppingBasket } from "react-icons/fa"

const Navbar = () => {
    return(
        <>
        
        <nav>
            <div class="logo">
                <a href="#">B.Shop</a>
            </div>
            <ul class="navbar">
                <li><a href="#">Main</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Partners</a></li>
            </ul>
            <div class="navbar-icons">
                <div class="search-icon"><a href="#"><i id='search'><FaSearch /></i></a></div>
                <div class="login-register"><a href="#">Login/Register</a></div>
                <div class="cart-icon"><a href="#"><i id='shop'><FaShoppingBasket /></i></a></div>
            </div>
        </nav>          
            

        </>
    )
}

export { Navbar }