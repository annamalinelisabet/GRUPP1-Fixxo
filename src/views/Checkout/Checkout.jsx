import React from 'react'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import CheckoutTop from '../../components/CheckoutTop/CheckoutTop'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='m-Checkout'>
        <CheckoutTop />
        <div className="checkout-divs">
            <div className='summary'>
                <h4>Checkout</h4>
                <p>Här ska varukorgen vara</p>
            </div>
            <CheckoutForm />
        </div>
    </div>
  )
}

export default Checkout