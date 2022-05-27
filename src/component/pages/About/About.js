import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className='abou1t'>
      <body className='about_body'>
      <div className='intro'>
        <h1>About Me</h1>
        <p>Olaniyi Akinlabi is a passionate and goal driven<br/>Techprenuer whose interest is in using technology to <br/>build solutions to solve real word problems</p>
        <div className='socialabout'>
          <div className='circle'>
        <FontAwesomeIcon icon={faTwitter} className='icont' /></div>
        <div className='circle1'>
      <FontAwesomeIcon icon={faLinkedin} className='iconl' /></div>
        </div>
      </div>
      </body>
        
    </div>
    
  )
}

export default About