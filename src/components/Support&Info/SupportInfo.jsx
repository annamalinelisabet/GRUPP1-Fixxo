import React from 'react'
// import { NavLink, Link } from 'react-router-dom'
import './SupportInfo.css'



function SupportInfo() {
  return (

      <div className="suppInfo-icons">

        <div className='suppIcon-1'>
        <img src="images/logo1.png" alt="customer-support" />
        <h3 className='icon-text'>Customer Support</h3>
        <p>Village did removed enjoyed <br /> explain talking.</p>
        </div>

        <div className='suppIcon-2'>
        <img src="images/logo2.png" alt="secured-payment" />
        <h3 className='icon-text'>Secured Payment</h3>
        <p>Village did removed enjoyed <br /> explain talking.</p>
        </div>

        <div className='suppIcon-3'>
        <img src="images/logo3.png" alt="free-home-delivery" />
        <h3 className='icon-text'>Free Home Delivery</h3>
        <p>Village did removed enjoyed <br /> explain talking.</p>
        </div>

        <div className='suppIcon-4'>
        <img src="images/logo4.png" alt="30-day-reuters" />
        <h3 className='icon-text'>30 Day Reuters</h3>
        <p>Village did removed enjoyed <br /> explain talking.</p>
        </div>

    </div>

  )
}

export default SupportInfo