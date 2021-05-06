import React, { Suspense, useEffect, useRef, useState } from 'react'
import './Custom.css'
import Shoenique from '../../Shoenique'
import {Link} from 'react-router-dom'
import shoenw from '../img/shoenw.png'
import firebaseConfig from "../firebase";

const Custom = () => {
    const [laces, setLaces] = useState("");
    const [mesh, setMesh] = useState("");
    const [caps, setCaps] = useState("");
    const [inner, setInner] = useState("");
    const [sole, setSole] = useState("");
    const [stripes, setStripes] = useState("");
    const [band, setBand] = useState("");
    const [patch, setPatch] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firebaseConfig.firestore().collection("Colorcode")
        .add({
        Laces: laces,
        Mesh: mesh,
        Caps: caps,
        Inner: inner,
        Sole: sole,
        Stripes: stripes,
        Band: band,
        Patch: patch
        })
        .then(() => {
        setLoader(false);
        location.replace("/payment");
        })
        .catch((error) => {
        alert(error.message);
        setLoader(false);
        });

        setLaces("");  
        setMesh("");
        setCaps("");
        setInner("");
        setSole("");
        setStripes("");
        setBand("");
        setPatch("");
    };

    return (
    <>
        <div className="navbar">
                <img src={shoenw} className="logo" />
                <ul>
                    <li className='nav-item'>

                    </li>
                    <li className='nav-item'>

                    </li>
                    <li className='nav-item'>
 
                    </li>
                    <li className='nav-item'>

                    </li>
                </ul> 
        </div>


        <label className="forgot">**Please fill up the color code in the bottom page</label><br></br>
        < Shoenique />

        <div className="fillhex">
            <h3 className="head3">Fill up Hex color numbers </h3>
            <form className="hexform" onSubmit={handleSubmit}> 
            <table >
                <tr>
                    <th>Shoenique</th>
                    <th>Laces</th>
                    <th>Mesh</th>
                    <th>Caps</th>
                    <th>Inner</th>
                    <th>Sole</th>
                    <th>Stripes</th>
                    <th>Band</th>
                    <th>Patch</th>
                </tr>
                <tr>
                    <td>Input</td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={laces}
                            onChange={(e) => setLaces(e.target.value)}/>
                    </td>

                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={mesh}
                            onChange={(e) => setMesh(e.target.value)}/>
                    </td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={caps}
                            onChange={(e) => setCaps(e.target.value)}/>
                    </td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={inner}
                            onChange={(e) => setInner(e.target.value)}/>
                    </td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={sole}
                            onChange={(e) => setSole(e.target.value)}/>
                    </td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={stripes}
                            onChange={(e) => setStripes(e.target.value)}/>
                    </td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={band}
                            onChange={(e) => setBand(e.target.value)}/>
                    </td>
                    <td><input
                            className='hexinput'
                            type='text' 
                            placeholder='Color Code'
                            value={patch}
                            onChange={(e) => setPatch(e.target.value)}/>
                    </td>


                
                </tr>
                
            </table><br></br>
            <button
                type="submit" className="save"

                >
                Checkout
            </button>
            </form>
        <br></br>
    </div>  



    </>
);
};
    

export default Custom;