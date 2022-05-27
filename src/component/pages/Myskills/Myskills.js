import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Progressbar from './progressbar/progressbar';
import {faPhp, faHtml5, faJs, faPython,faWordpress, faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import './Myskills.css'


const Myskills = () => {
  return (
   <div className='divide'>



<div className='part1'>
  <h1 className='h1-skills' >My Skills</h1>
  <p className='p-skills' >Here are the few skills I posses</p>
  <div className='Container_skills'>
    <h3 className='descript-skills'>PHP</h3>
    <div className='logo'>
      <FontAwesomeIcon icon={faPhp} className='icon' />
<div className='progress'>
<Progressbar bgcolor="blue" progress=''  height={8}  /></div></div>
</div>



<div className='Container_skills'>
    <h3 className='descript-skills'>Javascript</h3>
    <div className='logo'>
      <FontAwesomeIcon icon={faJs} className='icon' />
<div className='progress'>
<Progressbar bgcolor="blue" progress=''  height={8}  /></div></div>
</div>



<div className='Container_skills'>
    <h3 className='descript-skills'>Microsoft Office</h3>
    <div className='logo'>
      <FontAwesomeIcon icon={faMicrosoft} className='icon' />
<div className='progress'>
<Progressbar bgcolor="blue" progress=''  height={8}  /></div></div>
</div>




</div>
<div className='part2'>
<div className='Container_skills'>
    <h3 className='descript-skills'>Python</h3>
    <div className='logo'>
      <FontAwesomeIcon icon={faPython} className='icon' />
<div className='progress'>
<Progressbar bgcolor="blue" progress=''  height={8}  /></div></div>
</div>



<div className='Container_skills'>
    <h3 className='descript-skills'>Wordpress</h3>
    <div className='logo'>
      <FontAwesomeIcon icon={faWordpress} className='icon' />
<div className='progress'>
<Progressbar bgcolor="blue" progress=''  height={8}  /></div></div>
</div>






<div className='Container_skills'>
    <h3 className='descript-skills'>HTML</h3>
    <div className='logo'>
      <FontAwesomeIcon icon={faHtml5} className='icon' />
<div className='progress'>
<Progressbar bgcolor="blue" progress=''  height={8}  /></div></div>
</div>




</div>






    
    

   
        </div>
        
       

    


        
       
    
   
    
  
    
    
    
  )
}

export default Myskills