import React from 'react'
import '../stylesheet/landing.css';
import Navbar from './navbar';
function landing() {
  return (
    <div className="backimg" >
         <Navbar />
         <div className="extra"></div>
         <h1 className='text'>Agriculture Reforming</h1>
         <button className='imgbtn'>Discove more</button>
    </div>
  )
}

export default landing