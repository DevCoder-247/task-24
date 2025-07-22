import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { CartProvider, CartContext } from './Context/CartContext';
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import Payment from './Components/Payment/Payment'; 
import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="container mx-auto p-6 flex gap-6 pt-20">
              <Products />
              <Cart />
            </div>
          } />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

function AppContent() {
  const { showPayment } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (showPayment) {
      navigate("/payment");
    }
  }, [showPayment, navigate]);

  return (
    <div className="container mx-auto p-6 flex gap-6 pt-20">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
