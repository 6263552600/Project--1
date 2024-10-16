import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Service from '../components/Service'
import Doctors from '../components/Doctors'
import Howitworks from '../components/Howitworks'
import Reviews from '../components/Reviews'
import PageNotFound from '../components/PageNotFound'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/service' element={<Service/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/Howitworks' element={<Howitworks/>}></Route>
        <Route path='/Reviews' element={<Reviews/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </div>
  )
}

export default Routing