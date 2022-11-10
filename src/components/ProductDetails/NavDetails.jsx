import { useState } from 'react'
import './ProductDetails.css'
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
        <li className="nav-item d-underline d-text p-2" onClick={onClickDetails}>
          Description
        </li>
        <li className="nav-item d-underline d-text p-2"  onClick={onClickReturns}>
          Shopping & Returns
        </li>
        <li className="nav-item d-underline d-text p-2"  onClick={onClickReviews}>
          Reviews
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