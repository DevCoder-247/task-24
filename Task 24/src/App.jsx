import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import CartContextProvider from './Context/CartContextProvider'

function App() {

  return (
    <CartContextProvider>
      <Header />
      
      <Outlet />

    </CartContextProvider>
  )
}

export default App
