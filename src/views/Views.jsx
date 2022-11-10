import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import HomeView from './Home/HomeView'
import ProductsLinkView from './ProductsLinkView/ProductsLinkView'
import Details from './ProductDetails/Details'


const Views = () => {
  return (
    <Routes>
        <Route path ="/" element={ <HomeView /> } />
        <Route path ="/products" element={ <ProductsLinkView /> } />
        <Route path ="/products/:id" element={ <Details /> } />
        <Route path ="/checkout" element={ <Checkout /> } />
    </Routes>
  )
}

export default Views