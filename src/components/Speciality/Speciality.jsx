import React from 'react'
// import { Link } from 'react-router-dom'
import './Speciality.css'
import '../../App.css'
import woman from '../../images/woman.svg'

const Speciality = () => {
  return (
    <div className="container backgroundCard mt-4">

      <h5 className='text-center mb-4 text-dark'> Our Speciality </h5>

      <div className="row d-flex justify-content-center align-items-center flex-md-column flex-lg-row">

        <div className="col-lg-4 col-md-10 d-flex min-height mb-lg-0 mb-2">
          <div className='col-6 textBackground p-2 d-flex flex-column justify-content-center ps-3 custom-card'>
            <p>Track Your Order</p>
            <a href='https://customerservice-macys.com/' target="_blank" rel="noopener noreferrer" className='linkf'>
            <p className='text-decoration-underline cursor-pointer'>Get Started<i className="fas fa-angle-right"></i></p>
            </a>
          </div>
          <div className='col-6 grey p-2 d-flex justify-content-center align-items-center'>
            <img src={woman} className="imgPic" alt=".." />
          </div>
        </div>

        <div className="col-lg-4 col-md-10 d-flex min-height mb-lg-0 mb-2">
          <div className='col-6 textBackground p-2 d-flex flex-column justify-content-center ps-3 custom-card'>
            <p>Make a Return</p>
            <a href='https://customerservice-macys.com/' target="_blank" rel="noopener noreferrer" className='linkf'>
            <p className='text-decoration-underline'>Get Started <i className="fas fa-angle-right"></i></p>
            </a>
          </div>
          <div className='col-6 grey p-2 d-flex justify-content-center align-items-center'>
            <img src={woman} className="imgPic" alt=".." />
          </div>
        </div>

        <div className="col-lg-4 col-md-10 d-flex min-height">
          <div className='col-6 textBackground p-2 d-flex flex-column justify-content-center ps-3 custom-card'>
            <p>Request a Price Adjustment</p>
            <a href='https://customerservice-macys.com/' target="_blank" rel="noopener noreferrer" className='linkf'>
            <p className='text-decoration-underline'>Get Started <i className="fas fa-angle-right"></i></p>
            </a>
          </div>
          <div className='col-6 grey p-2 d-flex justify-content-center align-items-center'>
            <img src={woman} className="imgPic" alt=".." />
          </div>
        </div>

      </div>
    </div>

  )
}

export default Speciality