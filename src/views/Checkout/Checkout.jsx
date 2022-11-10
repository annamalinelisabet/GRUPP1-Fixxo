import React from 'react'
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm'
import CheckoutTop from '../../components/CheckoutTop/CheckoutTop'
import ShoppingCart from '../../components/shoppingCart/ShoppingCart'
import './Checkout.css'

const Checkout = () => {
  return (
    <div className='m-Checkout'>
        <CheckoutTop />
        <div className="checkout-divs">
            <div className='summary'>
              <ShoppingCart />
            </div>
            <CheckoutForm />
        </div>
    </div>
  )
}

export default Checkout