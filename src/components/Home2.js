import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { auth, createUserDocument } from './firebase';
import shoenw from './img/shoenw.png'

class Home2 extends Component {

    logout = () => {
        auth.signOut();
    }

    render(){
        return(
            <>
            <div className="navbar">
            <img src={shoenw} className="logo" />
            <ul>
                <li className=''>
                </li>
                <li className=''>
                    
                </li>
                <li className=''>
                
                </li>
                <li className=''>
                    <button onClick={this.logout}>Logout</button>
                </li>
            </ul> 
            </div>
            <div class="content">
                <p class="sentence1">UNIQUE IS YOUR</p>
                <p class="sentence2">You can make your unique slip on</p>
                <p class="sentence3">by your lifestyle.</p>
                <div>
                    <button type="button" className="letcustom"><span></span>
                        <Link to='/custom2' className='custom-butt'> Let's Custom </Link>
                    </button>
            </div>
            </div>
        
            </>
        )
    }
}

export default Home2;