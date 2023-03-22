import React from 'react'
import Header from '../front/Header/Header'
import Intro from '../front/Intro/Intro'
import Products from '../front/Products/Products'
import Booking from '../front/Booking/Booking'
import News from '../front/News/News'
import Footer from '../front/Footer/Footer'

function Home({cartItems, handleAddProduct, handleRemoveProduct}){
  return (
    <div  className="App">
      <Header cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
      <Intro/>
      <Products cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/> 
      <Booking/>
      <News/>
      <Footer />
    </div>
  )
}

export default Home
