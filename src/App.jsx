import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import  AboutUs  from './pages/AboutUs'
import { Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'



function App() {
 

  return (
    <>
    <Navbar/>

    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

  
  
    </>
  )
}

export default App
