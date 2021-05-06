import React, { Component } from 'react';
import { auth, createUserDocument } from './firebase';
import {Link} from 'react-router-dom';
import '../components/pages/Custom.css'
import shoenw from '../components/img/shoenw.png';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            formTitle: 'Login',
            loginBtn: true
        }
    }

    login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})
        });
    }

    getAction = action => {
        if(action === 'reg'){
            this.setState({formTitle: 'Register New User', loginBtn: false, fireErrors: ''});
        }else{
            this.setState({formTitle: 'Login', loginBtn: true, fireErrors: ''});
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){

        let errorNotification = this.state.fireErrors ? 
            ( <div className="Error"> {this.state.fireErrors} </div> ) : null;

        let submitBtn = this.state.loginBtn ? 
            (<input className="loginBtn" type="submit" placeholder="email" onClick={this.login} value="Sign In" />) : 
            (<input className="loginBtn" type="submit" placeholder="password" onClick={this.register} value="Sign Up" />);

        let login_register = this.state.loginBtn ?
            (<button className="registerBtn" onClick={() => this.getAction('reg')}>Sign Up</button>) : 
            (<button className="registerBtn" onClick={() => this.getAction('login')}>Sign In</button>)

        return(
            <>
                   <li className='nav-item'>
                    </li>     
                    <li className='nav-item'>
                        <Link to="/">
                            <button className ='backtohomebtn'type="button">
                                 Back To Home
                            </button>
                        </Link>
                    </li>
            <div className="form_block">
                <img src={shoenw} className="logo3" />
                <div id="title">{this.state.formTitle}</div>
                <div className="body">
                    {errorNotification}
                    <form>
                        <input className="emailnpasstext" type="text" 
                        value={this.state.email} 
                        onChange={this.handleChange}  placeholder="email"
                        name="email" />

                        <input type="password" className="emailnpasstext"
                        value={this.state.password} 
                        onChange={this.handleChange} placeholder="password"
                        name="password" />

                        {submitBtn}
                    </form>
                    {login_register}
                </div>
            </div>
            </>
        )
    }
}

export default Login;