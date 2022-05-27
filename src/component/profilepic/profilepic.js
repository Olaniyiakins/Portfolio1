import React from 'react'
import image from '../constant/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import './profilepic.css'

const profilepic = () => {
  return (
    <div className='profile'>
        <div className='socialprofile'>
          <div className='circle'>
        <FontAwesomeIcon icon={faTwitter} className='icont' /></div>
        <div className='circle1'>
      <FontAwesomeIcon icon={faLinkedin} className='iconl' /></div>
        </div>
        <img src={image.mypic} alt='mypic' className='mypic' />
    </div>
  )
}

export default profilepic