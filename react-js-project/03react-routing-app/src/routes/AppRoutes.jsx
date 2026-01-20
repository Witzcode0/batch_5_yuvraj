import React from 'react'
import About from '../pages/About'
import Dashboard from '../pages/Categories'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import { Route, Routes } from 'react-router-dom'
import Categories from '../pages/Categories'
import CategoryList from '../pages/CategoryList'
import CategoryDetails from '../pages/CategoryDetails'


function AppRoutes() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/categories' element={<Categories/>}>
              <Route index element={<CategoryList/>}></Route>
              <Route path=":slug" element={<CategoryDetails />}></Route>
            </Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  )
}

export default AppRoutes