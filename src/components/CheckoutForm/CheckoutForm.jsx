import React from 'react'
import './CheckoutForm.css'

const CheckoutForm = () => {
  return (
    <form className='m-CheckoutForm'>
        <h6>Contact information</h6>
        <input type="email" name='email' placeholder='Enter your email'/>
        <input type="text" name='phone' placeholder='Enter your phone number'/>
        <h6>Shipping information</h6>
        <div className='m-input-div'>
            <input className='input1' type="text" name='firstName' placeholder='Enter your first name'/>
            <input className='input2' type="text" name='lastName' placeholder='Enter your last name'/>
        </div>
        <input type="text" name='address' placeholder='Enter your address'/>
        <div className='m-input-div'>
            <input className='input1' type="text" name='postalCode' placeholder='Enter your postal code'/>
            <input className='input2' type="text" name='city' placeholder='Enter your city'/>
        </div>
        <button className='btn-news m-width'>ORDER NOW</button>
        <small>$130</small>
    </form>
  )
}

export default CheckoutForm