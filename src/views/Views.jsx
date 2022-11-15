import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Checkout from './Checkout/Checkout'
import HomeView from './Home/HomeView'
import ProductsLinkView from './ProductsLinkView/ProductsLinkView'
import Details from './ProductDetails/Details'
import Order from './Order'


const Views = () => {
  return (
    <Routes>
        <Route path ="/" element={ <HomeView /> } />
        <Route path ="/products" element={ <ProductsLinkView /> } />
        <Route path ="/products/:id" element={ <Details /> } />
        <Route path ="/checkout" element={ <Checkout /> } />
        <Route path='/order' element={ <Order /> } />
    </Routes>
  )
}

export default Views