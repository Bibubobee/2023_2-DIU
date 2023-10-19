import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Home from './Home'
import CareerPage from './CareerPage'
import MockCareerUnavailable from './MockCareerUnavailable'; 

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrera/arquitectura' element={<CareerPage careerName="Arquitectura" />} />
        <Route path='/carrera/*' element={<MockCareerUnavailable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter