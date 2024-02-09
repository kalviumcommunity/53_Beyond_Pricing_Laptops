import { Route, Routes } from 'react-router-dom'

import React from 'react'
import LandingPage from '../Pages/LandingPage'
import Products from '../Pages/Products'
import Aboutus from '../Pages/Aboutus'

function Linkings() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/product' element={<Products/>} />
        <Route path='/About' element={<Aboutus/>}/>
    </Routes>
  )
}

export default Linkings