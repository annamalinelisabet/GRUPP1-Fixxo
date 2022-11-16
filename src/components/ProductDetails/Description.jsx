import React from 'react'
import { useSelector } from 'react-redux'
import './ProductDetails.css'

const Description = () => {  

  const productDetail = useSelector(state => state.productDetail.data)

  return (
    <div className='text-start'>
      <p>{productDetail.descLong} </p>
    </div>
  )
}

export default Description