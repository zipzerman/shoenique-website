import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import shoenw from '../img/shoenw.png';
import './success.css';

export default function Success(){

    return(

        <>
            <div className="wrapper">
                <div className="checkout_wrapper">
                    <div className="product_info">
                    <img src="https://i.imgur.com/b21G0or.png" alt="product"></img>
            
                    <div className="content">
                        <h3>Shoenique <br/>Sneakers</h3>
                        <p>฿2100</p>
                    </div>
                    </div>
                    <div className="checkout_form">
                    <p>Payment Section</p>
                    <div className="details">
                        <div className="section">
                        <input type="text" placeholder="Card Number"></input>
                        </div>
                        <div className="section">
                        <input type="text" placeholder="Cardholder Name"></input>
                        </div>
                        <div className="section last_section">
                        <div className="item55">
                            <input type="numbeer" placeholder="Expiry Date"></input>
                        </div>
                        <div className="item55">
                            <input type="number" placeholder="CVV"></input>
                        </div>
                        </div>
                        
                        <div className="btn55">
                            <Link to='/finish' className=''>Pay</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>


        </>
    )
}