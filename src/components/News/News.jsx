import React from 'react'
import { Link } from 'react-router-dom'
import './News.css'
import '../../App.css'
import woman from '../../images/woman.svg'
import man from '../../images/man.svg'

const News = () => {
  return (
    <div className="container d-flex mt-5">

      <div className="row">

      <div className="col-md-7 bg1">
        <div className="h-100 d-flex justify-content-center align-items-center pd flex-md-column flex-lg-row">
            <div className="new-sale container text-center text-lg-start m-b">
              <h4>Winter Clearance</h4>
              <h4>Up To 70% Off!</h4>
              <p className='p-element'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem apriam eaque ipsa 
                quae ab illo inventore.</p>
                <Link to="/blog"><button className='btn-news'>SHOP NOW</button></Link>
            </div>
            <div className="img d-none d-sm-none d-lg-block">
              <img className='' src={woman} height={250} alt="man shopping" />
            </div>
        </div>
      </div>
      {/* flex-md-column flex-md-column-reverse */}
      <div className="col-md-5 gy-2 gy-md-0 bg2 ">
        <div 
        className="
          h-100 
          d-flex 
          justify-content-center
          align-items-center
          flex-md-column
          flex-lg-column-reverse
          flex-xxl-row
        "> 
              <div className="new-arrivals container text-center m-b">
                <h4>New Arrivals</h4>
                <Link to="/blog"><button className='btn-news'>SHOP NOW</button></Link>
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

export default News