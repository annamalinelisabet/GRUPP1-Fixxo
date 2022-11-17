import React from 'react'
import { Link } from 'react-router-dom'
import './Inspiration.css'
import '../../App.css'
import woman from '../../images/woman.svg'
import man from '../../images/man.svg'

const Inspiration = () => {
  return (
    <div className="container mt-3">

      <div className="row">

      <div className="col-md-6 gy-2 gy-md-0 gx-md-2 gx-2 bg3">
        <div className="h-100 d-flex justify-content-center align-items-center pd">
            <div className="img d-none d-sm-none d-lg-block">
              <img className='' src={woman} height={250} alt="man shopping" />
            </div>
            <div className="new-sale container text-center m-b">
              <h4 className='e-white'>Pamela Reif's Top Picks</h4>
              <Link to="/products"><button className='btn-news'>SHOP NOW</button></Link>
            </div>
        </div>
      </div>
      <div className="col-md-6 gy-2 gy-md-0 gx-2 bg4 ">
        <div className=" h-100 d-flex justify-content-center align-items-center justify-content-around"> 
              <div className="new-arrivals container text-center m-b">
                <h4>Let's Be Conscious</h4>
                <Link to="/products"><button className='btn-inspo'>SHOP NOW</button></Link>
              </div>
              <div className="img d-none d-sm-none d-lg-block mt-lg-1">
                <img className='' src={man} height={250} alt="man shopping" />
              </div>
        </div>
      </div>

    </div> 

    </div>
    )
}

export default Inspiration