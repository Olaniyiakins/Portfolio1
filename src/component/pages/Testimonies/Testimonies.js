import React from 'react'
import './Testimonies.css'
import image from '../../constant/image';

const Testimonies = () => {
  return (
    <div className='testimonies'>
        <div className='box1'>
        
            <h1 className='recomend1'>Testimonies &<br/> Recommendation</h1>
        </div>
   
 
        <div className='testbox1'>
        <div className='test2'>    
        <div className='testim'>
          <img src={image.testifier}  alt='testifier' className='testifier1'/>
          <h4 className='testname'>OlaKunle Churchi</h4>
          <p>Olaniyi always get things done quickly<br></br>His always passionate with his job<br/>and am looking forward to work with him more.</p>
        </div>

        <div className='testim'>
          <img src={image.testifier}  alt='testifier' className='testifier1'/>
          <h4 className='testname'>OlaKunle Churchi</h4>
          <p>Olaniyi always get things done quickly<br></br>His always passionate with his job<br/>and am looking forward to work with him more.</p>
        </div>




        </div>

        <div className='test2'> 
        <div className='testim'>
          <img src={image.testifier}  alt='testifier' className='testifier1'/>
          <h4 className='testname'>OlaKunle Churchi</h4>
          <p>Olaniyi always get things done quickly<br></br>His always passionate with his job<br/>and am looking forward to work with him more.</p>
        </div>
        <div className='testim'>
          <img src={image.testifier}  alt='testifier' className='testifier1'/>
          <h4 className='testname'>OlaKunle Churchi</h4>
          <p>Olaniyi always get things done quickly<br></br>His always passionate with his job<br/>and am looking forward to work with him more.</p>
        </div>
        </div>
        </div>
        


</div>



       
    
        
        
   
    
  )
}

export default Testimonies