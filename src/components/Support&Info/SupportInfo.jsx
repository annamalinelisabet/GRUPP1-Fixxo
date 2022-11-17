import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './SupportInfo.css'



function SupportInfo() {
  return (

      <div className=" container d-flex flex-column justify-content-center align-items-center d-md-flex flex-md-row mb-md-4">
        
        <div className='f-md-flex flex-md-column me-md-5 me-lg-0 d-lg-flex flex-lg-row '>
            <div className='suppIcon pe-lg-5'>
              <img src="images/logo1.png" alt="customer-support" />
              <h4 className='icon-text'>Customer Support</h4>
              <p>Village did removed enjoyed <br /> explain talking.</p>
            </div>

            <div className='suppIcon pe-lg-5'>
              <img src="images/logo2.png" alt="secured-payment" />
              <h4 className='icon-text'>Secured Payment</h4>
              <p>Village did removed enjoyed <br /> explain talking.</p>
            </div>
        </div>

        <div className='f-md-flex flex-md-column d-lg-flex flex-lg-row'>
            <div className='suppIcon pe-lg-5'>
              <img src="images/logo3.png" alt="free-home-delivery" />
              <h4 className='icon-text'>Free Home Delivery</h4>
              <p>Village did removed enjoyed <br /> explain talking.</p>
            </div>

            <div className='suppIcon mb-3 mb-md-0'>
              <img src="images/logo4.png" alt="30-day-reuters" />
              <h4 className='icon-text'>30 Day Returns</h4>
              <p>Village did removed enjoyed <br /> explain talking.</p>
            </div>
          </div>

    </div>

  )
}

export default SupportInfo