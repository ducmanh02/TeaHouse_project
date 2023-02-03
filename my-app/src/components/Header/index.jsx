import React from 'react'
import "./style.css"
import { BsFillHeartFill }  from 'react-icons/bs';
const Header = () => {
  return (
    <div id='header'>
        <div className='logo'>
        <a href="/"><BsFillHeartFill /></a>
        </div>
        <div className='options-link'>
            <ul>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <a href="/">Sign in</a>
                </li>
                <li>
                    <a href="/">Sign up</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </div>
         </div>
  )
}

export default Header