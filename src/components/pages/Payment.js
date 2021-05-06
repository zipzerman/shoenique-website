import React, { Suspense, useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom';
import shoenw from '../img/shoenw.png';
import './Payment.css';
import firebaseConfig from "../firebase";

const Payment = () => {
  const [mwsize, setMWsize] = useState("");
  const [size, setSize] = useState("");
  const [qty, setQty] = useState("");
  const [fullname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [province, setProvince] = useState("");
  const [zip, setZip] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firebaseConfig.firestore().collection("Shipping Address")
      .add({
        MorWsize: mwsize,
        Size: size,
        Quantity: qty,
        Fullname: fullname,
        Email: email,
        Address: address,
        Province: province,
        zip: zip
      })
      .then(() => {
        setLoader(false);
        
        location.replace("/success");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setMWsize("");  
    setSize("");
    setQty("");
    setFname("");
    setEmail("");
    setAddress("");
    setProvince("");
    setZip("");
  };

  return (
    <>
    <div className="navbar">
      <img src={shoenw} className="logo" />
                
    </div>
    <center>
    <div className= "paymentdiv">
      <form className="paymentform" onSubmit={handleSubmit}>

        <h1 className="Checkout">Check Out</h1><br></br>

        <h2 className="head2-1">Shoe Information</h2>

        
        <label >Men or Women Size: </label>
        <input type="text" className ="textinput"
          placeholder="Men/Women Size"
          value={mwsize}
          onChange={(e) => setMWsize(e.target.value)}
        />

        <label >Size (US size): </label>
        <input type="number" className ="textinput"
          placeholder="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />

        <label >Quantity: </label>
        <input type="number" className ="textinput"
          placeholder="Quantity"
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
        <h2 className="head2-2">Shipping Address</h2>

        <label >Full Name: </label>
        <input type="text" className ="addressinput"
          placeholder="Fullname"
          value={fullname}
          onChange={(e) => setFname(e.target.value)}
        />

        <label >Email: </label>
        <input type="text" className ="addressinput"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label >Address: </label><br></br>
        <textarea className="Addresstext" 
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea><br></br>

        <label >Province: </label>
        <input type="text" className ="addressinput"
          placeholder="Province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
        />

        <label >ZIP Code: </label>
        <input type="number" className ="addressinput"
          placeholder="zip code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
        />
        
        <button className="checkoutbtn"
          type="submit"
          style={{ background: loader ? "#ccc" : " #19ffa7" }}
        >
          Checkout
        </button>
    
        
      </form>
    
    </div>
    </center>

    </>
  );
};
    

export default Payment;