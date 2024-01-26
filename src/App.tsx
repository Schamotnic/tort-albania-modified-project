// import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import About from './components/About';
import SharedLayout from './components/SharedLayout';
import About from './pages/About';
import Menu from './pages/Menu';
import Delivery from './pages/Delivery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path="*" element={<p className='text-red-500'>Page not found</p>} />
      </Route>
    </Routes>
  );
}

export default App;
