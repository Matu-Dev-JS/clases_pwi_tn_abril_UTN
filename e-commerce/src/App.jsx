import React from 'react'

import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Detail, Home } from './Pages'


function App() {

  
  return (

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detalle/:productId' element={<Detail/>}/>
      <Route path='/contacto' element={<Contact/>}/>
      <Route path='/carrito' element={<Cart/>} />
    </Routes>

  )
}

export default App
