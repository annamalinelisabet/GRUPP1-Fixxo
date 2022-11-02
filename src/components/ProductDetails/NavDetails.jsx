import React from 'react'
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import Description from './Description'
import ShoppingReturns from './ShoppingReturns'
import Reviews from './Reviews'

const NavDetails = () => {
  return (
    <div className="container mb-3">
      <ul className="nav grey lighten-4 py-4">
        <li className="nav-item d-underline">
          <Link className="nav-link d-text" to="/">Description</Link>
        </li>
        <li className="nav-item d-underline">
          <Link className="nav-link d-text" to="/">Shopping & Returns</Link>
        </li>
        <li className="nav-item d-underline-active">
          <Link className="nav-link d-text-active" to="/">Reviews</Link>
        </li>
      </ul>

      <div>
        {/* <Description /> */}
        {/* <ShoppingReturns /> */}
        <Reviews />
      </div>
    </div>
  )
}

export default NavDetails;