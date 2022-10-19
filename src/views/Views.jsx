import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomeView from './Home/HomeView'

const Views = () => {
  return (
    <Routes>
        <Route path ="/" element={ <HomeView /> } />
    </Routes>
  )
}

export default Views