import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import ProductsLinkView from './ProductsLinkView/ProductsLinkView'

const Views = () => {
  return (
    <Routes>
        <Route path ="/" element={ <HomeView /> } />
        <Route path ="/products" element={ <ProductsLinkView /> } />
    </Routes>
  )
}

export default Views