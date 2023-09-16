import "./Header.css"
import logo from 'F:/disnep-clone/src/media/logo.svg'
import {FaHome,FaSearch,FaStar,FaPlus,FaTv,FaCameraRetro} from "react-icons/fa"

import React from 'react'

function Header() {
  return (
    <div className="Nav">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="NavMenu">
             
                <a href="/home">
                <FaHome/><span>Home</span> 
                </a>
                <a href="/home">
                <FaSearch/><span>Search</span> 
                </a>
                <a href="/home">
                <FaPlus/><span>Watchlist</span> 
                </a>
                <a href="/home">
                <FaStar/><span>Originals</span> 
                </a>
                <a href="/home">
                <FaCameraRetro/><span>Movies</span> 
                </a>
                <a href="/home">
                <FaTv/><span>Series</span> 
                </a>
                            
            </div>
            <a href="" className="login">
                LOGIN
            </a>
    </div>
  )
}

export default Header