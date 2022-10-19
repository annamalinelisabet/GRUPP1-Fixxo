import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './HomeView.css'

const Home = () => {
  return (
    <div className='Home'>
      Home
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home