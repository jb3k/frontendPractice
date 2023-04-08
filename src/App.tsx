import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './components/home';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
