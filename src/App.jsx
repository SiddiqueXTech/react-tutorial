import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './Home'
import { Shop } from './Shop'
import { About } from './About'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
