import React from 'react'
import './Services.css'
import pic from './img-1.jpg';
import pic1 from './download.png'
import pic2 from './img-5.png'

const Services = () => {
  return (
    <>
    <div className='clr'>
      <h1>Please Explore our Services</h1>
<div className='ttt'>

<img src={pic} height='200rem' width='auto' />
<img src={pic1} height='200rem' width='auto' />
<img src={pic2} height='200rem' width='auto' />
<div className='abb' >
Big Bucket - 500rs <br />
Medium Bucket - 300rs <br />
Small Bucket - 150rs
</div>

</div>

    </div>
      
    </>
  )
}

export default Services
