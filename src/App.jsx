import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './Home'
import { Shop } from './Shop'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
