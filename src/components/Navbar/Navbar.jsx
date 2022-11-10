import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { useSelector } from 'react-redux'
import ShoppingCart from '../shoppingCart/ShoppingCart'


const Navbar = () => {

  const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)

  const [navbarScroll, setNavbarScroll] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 120) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div className={navbarScroll ? "m-Navbar-scroll m-Navbar" : "m-Navbar"}>
      <Link to="/" className="m-navbar-logo">
        Fixxo.
      </Link>
      <ul className="m-nav-links">
        <li>
          <Link to="/" className="m-nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="m-nav-link">
            Products
          </Link>
        </li>
        <div className="d-flex align-items-center">
          <div className="dropdown">
            <span
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-shopping-cart"></i>
              {/* <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span> */}
             {totalQuantity >= 1 && <span className="badge rounded-pill badge-notification bg-danger">{totalQuantity}</span>}

            </span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <ShoppingCart />
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
