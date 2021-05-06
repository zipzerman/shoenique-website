import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'
import "react-colorful/dist/index.css"
import Shoenique from './Shoenique'
import Links from './Links'
// import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"



ReactDOM.render(
    <React.StrictMode>
        {/* <App /> */}
        <Links /> 
    </React.StrictMode>, 
    
    document.getElementById('root')
);
