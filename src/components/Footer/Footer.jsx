import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small  pt-4">

        <div className="w-50 container-fluid text-md-left">

          <div className="row">

            <div className="col-md-3 mb-md-0 mb-2">

              <h5 className="">Customer Service</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Help & FAQs </a>
                </li>
                <li>
                  <a href="#!">Order Lookup</a>
                </li>
                <li>
                  <a href="#!">Shipping & Delivery</a>
                </li>
                <li>
                  <a href="#!">Returns</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-2">

              <h5 className="">Macy's Credit Card</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!">Macy's Card Services</a>
                </li>
                <li>
                  <a href="#!">Pay Your Credit Card Bill</a>
                </li>
                <li>
                  <a href="#!">Cardholder Benefits</a>
                </li>
                <li>
                  <a href="#!">Apply for Macy's Credit Card</a>
                </li>
              </ul>

            </div>

            <div className="col-md-3 mb-md-0 mb-2">

              <h5 className="text-uppercase">Our Stores</h5>

              <ul className="list-unstyled text-danger">
                <li>
                  <a href="#!">Stores & Services</a>
                </li>
                <li>
                  <a href="#!">Locations & Hours</a>
                </li>
                <li>
                  <a href="#!">Store Events</a>
                </li>
                <li>
                  <a href="#!">Catalogs</a>
                </li>
              </ul>

            </div>

          </div>

        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="/" className='text-dark'> MDBootstrap.com</a>
        </div>

      </footer>

    </div>
  )
}

export default Footer