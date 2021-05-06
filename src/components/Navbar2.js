import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar2.css'
import shoenw from './img/shoenw.png'
import close from './img/close.png'
import logo from './img/logo.png'
import reg from './img/reg.png'

function Navbar2() {
    
    return (
        <>
            <div className="navbar">
                <img src={shoenw} className="logo" />
                    <ul>
                        <li className=''>
                            <Link to='/' className=''> Home </Link>
                        </li>
                        <li className=''>
                            <Link to='/about-us' className=''> About Us </Link>
                        </li>
                        <li className=''>
                            <Link to='/contact-us' className=''> Contact Us</Link>
                        </li>
                        <li className=''>
                            <Link to='/register' className=''> Register </Link>
                        </li>
                        <li className=''>
                            <Link to='/login' className=''>Login </Link>
                        </li>
                        

                    </ul> 
            </div>
            </>

    )
}

export default Navbar2


