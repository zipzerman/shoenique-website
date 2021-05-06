import React from 'react'
import '../Navbar2.css'
import {Link} from 'react-router-dom';
import shoenw from '../img/shoenw.png'

export default function Home() {

    return(

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
                        <Link to='/Signup' className=''>Sign Up/Sign In</Link>
                </li>
                
                
                
            </ul> 
        </div>


        <div class="content">
            <p class="sentence1">UNIQUE IS YOUR</p>
            <p class="sentence2">You can make your unique slip on</p>
            <p class="sentence3">by your lifestyle.</p>
            <div>
                <button type="button" className="letcustom"><span></span>
                    <Link to='/custom' className='custom-butt'> Let's Custom </Link>
                </button>
            </div>
        </div>

        </>
    )
}