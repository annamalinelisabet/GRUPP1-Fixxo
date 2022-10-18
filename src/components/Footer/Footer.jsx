import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small pt-4 bgf">

        <div className="w-75 container-fluid text-md-left">

          <div className="row d-flex justify-content-center">

            <div className="col-md-2 mb-md-0 mb-2">

              <h5 className="fcolor">Customer Service</h5>

              <ul className="list-unstyled">
                <li><Link to="#" className='linkf'>Help & FAQs </Link></li>
                <li><Link to="#" className='linkf'>Order Lookup</Link></li>
                <li><Link to="#" className='linkf'>Shipping & Delivery</Link></li>
                <li><Link to="#" className='linkf'>Returns</Link></li>
                <li><Link to="#" className='linkf'>Contact Us</Link></li>
              </ul>

            </div>

            <div className="col-md-2 mb-md-0 mb-2">

              <h5 className="fcolor">Macy's Credit Card</h5>

              <ul className="list-unstyled">
                <li><Link to="#" className='linkf'>Macy's Card Services</Link></li>
                <li><Link to="#" className='linkf'>Pay Your Credit Card Bill</Link></li>
                <li><Link to="#" className='linkf'>Cardholder Benefits</Link></li>
                <li><Link to="#" className='linkf'>Apply for Macy's Credit Card</Link></li>
              </ul>

            </div>

            <div className="col-md-2 mb-md-0 mb-2">

              <h5 className="fcolor">Our Stores</h5>

              <ul className="list-unstyled text-danger">
                <li><Link to="#" className='linkf'>Stores & Services</Link></li>
                <li><Link to="#" className='linkf'>Locations & Hours</Link></li>
                <li><Link to="#" className='linkf'>Store Events</Link></li>
                <li><Link to="#" className='linkf'>Catalogs</Link></li>
              </ul>

            </div>

            <div className="col-md-4 mb-md-0 mb-2">

              <h5 className="fcolor">Macy's App</h5>

              <div className='mt-3'>
                  <Link to='#'><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" width="140" height="54" alt='apple' /></Link>  
                  <Link to='#'className='ms-2'><img src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" width="140" height="45" alt='google' /></Link>  
              </div>

              <div>
                <ul className='list-unstyled mt-3 d-flex flex-row'>
                  <li><Link to="#" className='fcolor p-2'><i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></Link></li>
                  <li><Link to="#" className='fcolor p-2'><i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></Link></li>
                  <li><Link to="#" className='fcolor p-2'><i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></Link></li>
                  <li><Link to="#" className='fcolor p-2'><i className="fa-solid fa-g"></i></Link></li>
                  <li><Link to="#" className='fcolor p-2'><i className="fa-brands fa-linkedin"></i></Link></li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        <div className='line'>
        </div>

        <div className="footer-copyright text-center py-3">© 2021
          <a href="/" className='text-dark'> FIxxo. All Rights Reserved</a>
        </div>

      </footer>

    </div>
  )
}

export default Footer