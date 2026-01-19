import React from 'react'
import About from '../pages/About'
import Dashboard from '../pages/Categories'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import Categories from '../pages/Categories'


function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/categories' element={<Categories/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default AppRoutes