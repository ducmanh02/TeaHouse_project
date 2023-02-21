import React from 'react'
import './style.css'

const Product = ({element}) => {
  return (
    <div className='product_container'>
        <img src={element.image} alt="" />
        <h2>{element.title}</h2>
        <div className='button'>
            <h3><i>Price : {element.price}$</i></h3>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Product