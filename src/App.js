import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Profilepic from './component/profilepic/profilepic'
import About from './component/pages/About/About'
import Myskills from './component/pages/Myskills/Myskills';
import Service from './component/pages/Service/Service';
import Project from './component/pages/Project/Project';
import Testimonies from './component/pages/Testimonies/Testimonies';
import Contact from './component/pages/contact/Contact';
import Footer from './component/pages/Footer/Footer';




function App() {
  return (
    <div className="App">
      
 
      <header>
      <Navbar/>
      <Profilepic/>
      </header>
     
      <About/>
    <Myskills/>
    <Service/>
    <Project/>
    <Testimonies/>
    <Contact/>
    <Footer/>

      
      
      
      
     
      
    
    
    
  


     
     
    </div>
  );
}

export default App;
