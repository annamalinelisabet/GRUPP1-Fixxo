import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className='pt-5 hero-bg hero-row d-flex align-items-center'>
      
      <div className='col h-100 d-none d-sm-block hero-bg-left'>
      </div>
      
      <div className='col h-100 hero-align-col text-center'>
          <p className='hero-header'>SALE UP <br></br>To 50% Of</p>
          <p className='hero-text'>Online shopping free home delivery over $100</p>
          <Link to='/products'><button className='btn-hero'>SHOP NOW</button></Link>
      </div>
      
      <div className='col h-100 d-none d-lg-block hero-bg-right'>
      </div>

    </div>
  )
}

export default Hero