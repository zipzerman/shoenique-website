import React from 'react'
// import '../../App.css'
import {Link} from 'react-router-dom'
import shoenw from '../img/shoenw.png'


export default function AboutUs() {

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
                        <Link to='/Signin' className=''>Sign Up/Sign In </Link>
                    </li>
                </ul> 
            </div>

            <div class="content-aboutus">
                <p class="sentence1">ABOUT US</p>
                <p class="sentence2">In the present, people could buy any products that they want by online mobile and website applications such as Lazada and Shopee.
                    Some product, we would like to design and add some specific feature by our format such as shoe. Most of product’s websites could 
                    only customize the color of shoe but could not change the form or add feature to shoe such as determine the position of the words want to 
                    add to the shoe. However, we would like to create the website that you can customize your shoe independently with your imagination, 
                    the website will give you lots of appealing options that not ever any website has done it before. The customers could choose 
                    their colors thoroughly.</p>
            </div> 
        
        </>
    )
}