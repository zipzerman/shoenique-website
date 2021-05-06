import React, {Component} from 'react';
import { auth, createUserDocument } from './firebase';
import Login from './Signin';
import Home2 from './Home2';
import shoenw from './img/shoenw.png'
import {Link} from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    auth.onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }

  render(){
    return (
      <>
        <div>
          {this.state.user ? (<Home2 />) : (<Login />)}
        </div>
      </>
    );
  }
}

export default App;




















/* import React, { Component } from 'react';
import { auth, createUserDocument } from './firebase';
import {Link} from 'react-router-dom';

class Signup extends Component {
  state = { displayName: '', email: '', password: '' };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, displayName } = this.state;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserDocument(user, { displayName });
      alert("Register Succesfully👍");
    } catch (error) {
      console.log('error', error);
    }

    this.setState({ displayName: '', email: '', password: '' });
  };

  render() {
    const { displayName, email, password } = this.state;
    return (
        <>
        <div className="navbar">
                
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
                        <Link to='/Signup' className=''>Sign Up </Link>
                    </li>
                    <li className=''>
                        <Link to='/Signin' className=''>Sign In </Link>
                    </li>
                </ul> 
        </div>
      <div>
        <form className="signup-login" onSubmit={this.handleSubmit}>
          <h2>Signup</h2>

          <input
            type="name"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button>Signup</button>
        </form>
      </div>
    </>
    );
  }
}

export default Signup; */