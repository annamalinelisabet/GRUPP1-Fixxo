import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='m-Navbar'>
      <Link to ="/" className='m-navbar-logo'>Fixxo.</Link>
      <ul className='m-nav-links'>
        <li><NavLink to="/" end className='m-nav-link'>Home</NavLink></li>
        <li><Link to="#" className='m-nav-link'>Categories</Link></li>
        <li><Link to="#" className='m-nav-link'>Products</Link></li>
        <li><Link to="#" className='m-nav-link'>Products</Link></li>
        <li><Link to="#" className='m-nav-link'>Pages</Link></li>
        <li><NavLink to="/blog" className='m-nav-link'>Blog</NavLink></li>
      </ul>
      <ul className='m-profile-links'>
        <li><Link to="#" className='m-profile-link'><i className="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="#" className='m-profile-link'><i className="fa-solid fa-retweet"></i></Link></li>
        <li><Link to="#" className='m-profile-link'><i className="fa-regular fa-heart"></i></Link></li>
        <li><Link to="#" className='m-profile-link'><i className="fa-solid fa-bag-shopping"></i></Link></li>
      </ul>      
    </div>
  )
}

export default Navbar