import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'
import BlogView from './Blog/BlogView'

const Views = () => {
  return (
    <Routes>
        <Route path ="/" element={ <HomeView /> } />
        <Route path ="/blog" element={ <BlogView /> } />
    </Routes>
  )
}

export default Views