import { Route, Routes } from 'react-router-dom'

import React from 'react'
import LandingPage from '../Pages/LandingPage'
import Products from '../Pages/Products'
import Aboutus from '../Pages/Aboutus'
import FormCompo from '../Pages/FormCompo'
import Fetchdata from '../Pages/Fetchdata'
import EditData from '../Pages/EditData'
import Login from '../Pages/Login'
import Logout from '../Pages/Logout'

function Linkings() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/product' element={<Products/>} />
        <Route path='/About' element={<Aboutus/>}/>
        <Route path='/add' element={<FormCompo/>} />
        <Route path='/data' element={<Fetchdata/>} />
        <Route path='/edit/:id' element={<EditData/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Logout' element={<Logout/>} />
    </Routes>
  )
}

export default Linkings