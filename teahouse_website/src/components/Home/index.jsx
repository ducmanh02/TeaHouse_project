import React from 'react'
import Intro from '../front/Intro/Intro'
import Products from '../front/Products/Products'
import Booking from '../front/Booking/Booking'
import News from '../front/News/News'
import Footer from '../front/Footer/Footer'
function Home
(){
  return (
    <div  className="App">

      <Intro/>
      <Products /> 
      <Booking/>
      <News/>
      <Footer />
    </div>
  )
}

export default Home
