import { useState } from 'react'
import './ProductDetails.css'
import { Link } from 'react-router-dom'
import Description from './Description'
import ShoppingReturns from './ShoppingReturns'
import Reviews from './Reviews'

const NavDetails = () => {

  const [showDetails, setShowDetails] = useState(true)
  const [showReturns, setShowReturns] = useState(false)
  const [showReviews, setShowReviews] = useState(false)

  const onClickDetails = () => {
    setShowDetails(true)
    setShowReturns(false)
    setShowReviews(false)
  }
  const onClickReturns = () => {
    setShowDetails(false)
    setShowReturns(true)
    setShowReviews(false)
  }
  const onClickReviews = () => {
    setShowDetails(false)
    setShowReturns(false)
    setShowReviews(true)
  }

  return (
    <div className="container mb-3">
      <ul className="nav lighten-4 py-4">
        <li className="nav-item d-underline" onClick={onClickDetails}>
          Description
          {/* <Link className="nav-link d-text" to="/">Description</Link> */}
        </li>
        <li className="nav-item d-underline"  onClick={onClickReturns}>
          Shopping & Returns
          {/* <Link className="nav-link d-text" to="/">Shopping & Returns</Link> */}
        </li>
        <li className="nav-item d-underline-active"  onClick={onClickReviews}>
          Reviews
          {/* <Link className="nav-link d-text-active" to="/">Reviews</Link> */}
        </li>
      </ul>

      <div>
          { showDetails && <Description />}
          { showReturns && <ShoppingReturns /> }
          { showReviews && <Reviews /> }
      </div>
    </div>
  )
}

export default NavDetails;