import React, { Component } from 'react';

import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {
	
	Element,
	Events,
	animateScroll as scroll,
	scroller,
  } from "react-scroll";

import Seyi from '../pages/Seyi'
import About from '../pages/About/About'
import Service from '../pages/Service/Service'
import Project from '../pages/Project'
import Contact from '../pages/contact/Contact';
import Body from '../pages/body/body'
import './Navbar.css';

class App extends Component {
	
	
render() {
	return (
	<Router>
		<div className="Nav">
			<ul className="App-header">
			<li>
				<Link to="/" className='link' >Olaniyi Akinlabi</Link> 
			</li>
           
			<li>
				<Link to="/about" className='link' >About Us</Link>
			</li>
            <li>
				<Link to="/service" className='link'>Service</Link>
			</li>
            <li>
				<Link to="/project" className='link' >Project</Link>
			</li>



			<li>
				<Link to="/contact" className='link' >Contact </Link>
			</li>
			</ul>
			<div className='body'>
			<Body/>
			</div>
		<Routes>
				<Route exact path='/'  element={< Seyi />}></Route>
				<Route  path='/about' element={< About />}></Route>
				<Route  path='/service' element={< Service />}></Route>
                <Route  path='/project' element={< Project />}></Route>
				<Route  path='/contact' element={< Contact />}></Route>
		</Routes>
		</div>
	</Router>
	


);
}
}

export default App;
