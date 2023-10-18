import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import CareerPage from './CareerPage'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrera' element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter