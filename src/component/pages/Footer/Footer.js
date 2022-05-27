import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope ,} from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
  return (
    <div className='Footer'>
        <div className='link'>
        <div class="line-1"></div>
       
           <h3 className='name'> Olaniyi Akinlabi</h3>
    
      <div class="line-2"></div>
      </div>

      <div className='div2'>
      <div className='circle1'>
            
      <FontAwesomeIcon icon={faTwitter} className='icont' /></div>
       <div className='circle1'>
      <FontAwesomeIcon icon={faLinkedin} className='iconl' /></div>
      <div className='circle1'>
        <FontAwesomeIcon icon={faEnvelope} className='iconl' />
      </div>
       

      
      </div>
      <p className='copyright'>Copyright @ 20022 AllRightsResrved</p>

      
        


       
    </div>
  )
}

export default Footer