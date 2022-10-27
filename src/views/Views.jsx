import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import HomeView from './Home/HomeView'

const Views = () => {
  return (
    <Routes>
        <Route path ="/" element={ <HomeView /> } />
        <Route path ="/checkout" element={ <Checkout /> } />
    </Routes>
  )
}

export default Views