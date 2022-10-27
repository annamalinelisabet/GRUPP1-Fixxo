import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const [navbarScroll, setNavbarScroll] = useState(false)

  const changeBg = () => {
    if(window.scrollY >= 120) {
      setNavbarScroll(true)
    }
    else {
      setNavbarScroll(false)
    }
  }

  window.addEventListener('scroll', changeBg)

  return (
    <div className={navbarScroll ? 'm-Navbar-scroll m-Navbar' : 'm-Navbar'}>

      <Link to ="/" className='m-navbar-logo'>Fixxo.</Link>
      <ul className='m-nav-links'>
        <li><Link to="/" end className='m-nav-link'>Home</Link></li>
        <li><Link to="#" className='m-nav-link'>Products</Link></li>
      </ul>
      <ul className='m-profile-links'>
        <li><Link to="#" className='m-profile-link'><i className="fa-solid fa-magnifying-glass"></i></Link></li>
        <li><Link to="#" className='m-profile-link'><i className="fa-solid fa-bag-shopping"></i></Link></li>
      </ul>      
    </div>
  )
}

export default Navbar