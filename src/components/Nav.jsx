import React from "react";
import '../assets/style/nav.css';
import Logo from '../assets/images/logo.png'

function Nav() {
    
    return (

        <div className="nav">
            <div className="logo-container"> 
                <a href="#"><img src={Logo} alt="logo"  className="nav-logo"/></a>
            </div>
            <ul>
                <li>
                    <a href="#" className="nav-txt">Home</a>
                </li>
                <li>
                    <a href="#" className="nav-txt">About us</a>
                </li>
                <li>
                    <a href="#" className="nav-txt">Quizzez</a>
                </li>
                
            </ul>
        </div>
    )
}



export default Nav;