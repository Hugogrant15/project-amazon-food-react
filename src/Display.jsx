import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from './components/ProductList';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Healthb from "./pages/Healthb"



const Display = () => {
  return (
    <>  <BrowserRouter>
        <Header/>
        <Routes>
        < Route path='/' element= {<Home/>}/>
        <Route path='/products' element= {<Products/>}/>
        <Route path='/healthb' element= {<Healthb/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>
  )
}

export default Display