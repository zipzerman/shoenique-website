import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import shoenw from '../img/shoenw.png';
import './contactus.css';
import firebaseConfig from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firebaseConfig.firestore().collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

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
                        <Link to='/Signup' className=''>Sign Up/Sign In </Link>
                    </li>
                </ul> 
    </div>

    
    <form className="form" onSubmit={handleSubmit}>
    <h1 className="headcontact">Contact    Us</h1>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " #19ffa7" }}
      >
        Send
      </button>
      
    </form>

    </>
  );
};
    

export default Contact;