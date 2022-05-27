import React from 'react'
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope ,} from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='phone'>
          <div className='phone1'>
          <h1> Get in Touch</h1>
           <p>You can contact us now </p>
           <div className='circle3'>
           <div className='circle1'>
        <FontAwesomeIcon icon={faTwitter} className='icont' /></div>
        <div className='circle1'>
      <FontAwesomeIcon icon={faLinkedin} className='iconl' /></div></div>
      <div className='phone11'>
       <FontAwesomeIcon icon={faPhone}className='phone13'/>
       <p>+234 8063443147</p></div>
       <p>send Message anytime</p>
      
       <div className='email'>
      <FontAwesomeIcon icon={faEnvelope}  className='email'/>
       <p>OlaniyiAkins612@gmail.com</p></div>
       <p>Send Message anytime</p>
       

       </div>
        

        </div>
        <div className='form'>

    
        <form>
          <h2 className='hn'>Need A Service</h2>
          <h3 className='hn'>Send A Message</h3>
    
       <input type="text" className='i' placeholder='Enter Your Full Name'  /><br></br>
      
       <input type="text" className='i'placeholder='Enter Your email'  /><br></br>
       <input type="text" className='i'placeholder='Write A Message'  /><br></br>
              <button className='submit'>Submit</button>

       </form>
       
       </div>
       
        
    </div>
  )
}

export default Contact