import React from 'react'
import man from '../images/man.svg'

const Order = () => {
  return (
    <div className='vh-100 d-flex justify-content-center align-items-center'>
      <div className="card container border border-2">
        <h1 className='p-5 text-center'>Tack för din order!</h1>
        <img className='pb-3' src={man} height={250} alt="man shopping" />
      </div>
    </div>
  )
}

export default Order