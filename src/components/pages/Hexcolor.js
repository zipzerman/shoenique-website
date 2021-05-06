import React from 'react'
import './Hexcolor.css'
import {Link} from 'react-router-dom'
import shoenw from '../img/shoenw.png'

export default function Hexcolor(){

    return(

        <>

            <div className="navbar">
                <img src={shoenw} className="logo" />
                <ul>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links'> Home </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links'> About Us </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links'> Contact Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/register' className='nav-links'> Register </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-links'>Login </Link>
                    </li>
                </ul> 
            </div>

            <div className='form-content-right'>
                <form className='form' noValidate>
                    <h3 className="head">
                        Fill up Hex color numbers
                    </h3>
                    
                    <div className='form-inputs'>
                        <label className='form-label'>Laces :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Mesh :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Caps :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Inner :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Sole :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Stripes :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Band :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>
                    <div className='form-inputs'>
                        <label className='form-label'>Patch :</label>
                        <input
                            className='form-input'
                            type='text'
                            name='username'
                            placeholder='number'/>
                    </div>


                </form>
            </div>

            <button className="next-to-payment" type="button"><span></span>
                <Link to='/payment' className='custom-butt'> Next to payment </Link>
            </button>

        </>

    )

}