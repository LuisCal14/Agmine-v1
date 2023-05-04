import React from "react";
import './nav.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

function Nav() {
    
    const [toogleMenu, setToogleMenu] = React.useState(false);

    return (

        <div className="nav">
            <div className="logo-container"> 
                <img src={Logo} alt="app logo"/>
            </div>
            <ul className="navbar-links">
                <li><a href="#home" className="nav-txt">Home</a></li>
                <li><a href="#about" className="nav-txt">About</a></li>
                <li><Link className="nav-text" to="/games">Games</Link></li>
            </ul>
            <div className="navbar-smallscreen">
            <GiHamburgerMenu color='#9bf2ea' fontSize={30} onClick={() => setToogleMenu(true)}></GiHamburgerMenu>
        
                {toogleMenu && (
                <div className='navbar-smallscreen_overlay flex__center slide-bottom'>
                    <AiOutlineClose fontSize={30} color='#9bf2ea' className='overlay__close' onClick={() => setToogleMenu(false)}/> 
                    <ul className='navbar-smallscreen_links'>
                        <li className='p__opensans'><a href="#home">Home</a></li>
                        <li className='p__opensans'><a href="#about">About</a></li>
                        <li className='p__opensans'><a href="#menu">Games</a></li>
                    </ul>
                </div>
                )}
            </div>
        </div>
    )
}



export default Nav;