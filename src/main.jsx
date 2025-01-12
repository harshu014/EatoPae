import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Customer from './customer.jsx';
import Merchant from './merchant.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<App />} />
          <Route path="customer" element={<Customer />} />
          <Route path="merchant" element={<Merchant/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
)
