import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { CartContext, CartProvider } from './Context/CartContext';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment';
import { useContext } from 'react';


function App() {

  return (
    <>
      <Header />

      <CartProvider>
        <AppContent />
      </CartProvider>
 
    </>
  )
}

function AppContent() {
  const { showPayment } = useContext(CartContext); 

  return (
    <div className="container mx-auto p-6 flex gap-6 pt-20">
      {showPayment ? <Payment /> : <Products />}
      <Cart />
    </div>
  );
}

export default App;

