import React from 'react'
import { Routes, Route,Form } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import Api from './Api'
// import { Routes } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ProductForm' element={<ProductForm/>}/>
        <Route path='/ProductList' element={<ProductList/>}/>
        {/* <Route path='/Product Details' element={<Product Details/>}/> */}

  
      {/* </Routes> */} 
      <Api/>
    </>
  )
}

export default App
