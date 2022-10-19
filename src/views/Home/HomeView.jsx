import React from 'react'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import './HomeView.css'
import News from '../../components/News/News';
import Inspiration from '../../components/Inspiration/Inspiration'


const Home = () => {
  return (
    <div className='Home'>
      <div>
        <Hero />
        <News />
        <Inspiration />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home