import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './body.css'

const body = () => {
  return (
    <div className='body'>
        <h3 className='intro1'>Hi There</h3>
        <h2> I Am Olaniyi Akinlabi</h2>
        <h1> A Top-notch Developer,<br/>Writer and Mentor.</h1>
        <div className='socialbody'>
          <div className='circlebody'>
        <FontAwesomeIcon icon={faTwitter} className='icont' /></div>
        <div className='circle1body'>
      <FontAwesomeIcon icon={faLinkedin} className='iconl' /></div>
        </div>
    </div>
  )
}

export default body