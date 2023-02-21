import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import {IoLogoAmazon} from "react-icons/io5";
import {BiSearch} from "react-icons/bi";

import  "./style.css"


const Header = () => {
  return (
    <div className='header'>
        <div className='header_logo'>
            <IoLogoAmazon className='logo'  />
        </div>
        <div className='header_nav'>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href="/product">Product</a>
            <a href='/contact'>Contact</a>
        </div>
        <div className='header_button'>
            <div className='header_shopping_cart'>
                <FaShoppingCart className='icon' />
            </div>
            <div className='header_search'>
                <BiSearch />
            </div>
        </div>
    </div>
  )
}

export default Header