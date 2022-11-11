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
                <li><a href='https://www.macys.com/p/credit-service/learn-and-apply/' target="_blank" rel="noopener noreferrer" className='linkf'>
                  Macy's Card Services</a></li>
                <li><a href='https://www.macys.com/p/credit-service/learn-and-apply/' target="_blank" rel="noopener noreferrer" className='linkf'>
                Pay Your Credit Card Bill</a></li>
                <li><a href='https://www.macys.com/p/credit-service/learn-and-apply/' target="_blank" rel="noopener noreferrer" className='linkf'>
                Cardholder Benefits</a></li>
                <li><a href='https://www.macys.com/p/credit-service/learn-and-apply/' target="_blank" rel="noopener noreferrer" className='linkf'>
                Apply for Macy's Credit Card</a></li>
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
                <a href='https://www.apple.com/se/store' target="_blank" rel="noopener noreferrer" className='linkf'>
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" width="140" height="54" alt='apple' /></a>
                <a href='https://play.google.com/store/apps' target="_blank" rel="noopener noreferrer" className='linkf ms-2'>
                <img src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0" width="140" height="45" alt='google' /></a>
              </div>

              <div>
                <ul className='list-unstyled mt-3 d-flex flex-row'>
                  <li><a href='https://www.facebook.com/' target="_blank" rel="noopener noreferrer" className='fcolor p-2'>
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a></li>
                  <li><a href='https://www.instagram.com/' target="_blank" rel="noopener noreferrer" className='fcolor p-2'>
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a></li>
                  <li><a href='https://twitter.com/' target="_blank" rel="noopener noreferrer" className='fcolor p-2'>
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i></a></li>
                  <li><a href='https://www.google.com/' target="_blank" rel="noopener noreferrer" className='fcolor p-2'>
                  <i className="fa-solid fa-g"></i></a></li>
                  <li><a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer" className='fcolor p-2'>
                  <i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
              </div>

            </div>

          </div>

        </div>

        <div className='line'>
        </div>

        <div className="footer-copyright text-center py-3">© 2021
          <Link to="/" className='text-dark'> FIxxo. All Rights Reserved</Link>
        </div>

      </footer>

    </div>
  )
}

export default Footer