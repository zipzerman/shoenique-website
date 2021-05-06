import React from 'react'
import {BrowserRouter as Router, Switcher, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import Custom from './components/pages/Custom'
import Custom2 from './components/pages/Custom2'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Home2 from './components/Home2'
import Hexcolor from './components/pages/Hexcolor'
import Payment from './components/pages/Payment'
import Success from './components/pages/Success'
import Finish from './components/pages/finish'
// import Navbar2 from './components/Navbar2'



function Links() {

  

  return (
    
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} /> 
          <Route path='/about-us' exact component={AboutUs} /> 
          <Route path='/contact-us' exact component={ContactUs} /> 
          <Route path='/custom' exact component={Custom} />
          <Route path='/signup' exact component={Signup} />
          <Route path='/home2' exact component={Home2} />
          <Route path='/custom2' exact component={Custom2} />
          <Route path='/payment' exact component={Payment} />
          <Route path='/success' exact component={Success} />
          <Route path='/finish' exact component={Finish} />

        </Switch>
      </Router>
    </>
  );
}

export default Links;
