
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import "./Header.css";


const Header = () => {
    return (
        <header className="header">

            <div className="top">
                <img src='./logo.png' alt='logo' className="logo" />
                <h1 className='name'>LOGO</h1>
                <div>

                    <div className="header-icons">
                        <div className="">
                            <CiSearch className='heart-s' />
                        </div>
                        <div className="">
                            <CiHeart className='heart-s' />
                        </div>
                        <div className="">
                            <HiOutlineShoppingBag className='heart-s' />
                        </div>
                        <div className="">
                            <CiUser className='heart-s' />
                        </div>

                        <div className="language-dropdown">
                            <select>
                                <option value="en">English</option>
                                <option value="fr">Français</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Stories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </nav>
            </div>



        </header>
    );
};

export default Header;


