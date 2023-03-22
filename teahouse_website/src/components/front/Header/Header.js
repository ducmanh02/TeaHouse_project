import React from 'react'
import "./Style.css"
import { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"

const Header = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const [displatCart, setDisplatCart] = useState(false);

  const totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0)
  const TotalQuantity = cartItems.reduce((TotalQuantity, item) => TotalQuantity + item.quantity, 0);
  
  return (
    <div className='header-main'>

      <div className='header'>
        <div className='LOGO'>
          <h1>LOGO</h1>
        </div>
        <div>
          <AiOutlineShoppingCart className='header-icon-shopping-cart' onClick={() => setDisplatCart(!displatCart)} />
          <span className='total-quantity-item'> {TotalQuantity}</span>
        </div>
      </div>
      <div className='cart-on-display'>
        {displatCart && (
          <div className='cart-on-display-wrapper'>
            <h5>YOUR PRODUCTS IN HERE</h5>
            {cartItems.map((el, id) => (
              <div className='cart-on-display-item' key={id}>
                <div className='cart-on-display-item-image'>
                  <img src={el.image} alt='' />
                </div>
                <div className='cart-on-display-item-detail'>
                  <div className='cart-on-display-item-name'>
                    {el.title.toUpperCase()} : <br />
                    {el.quantity} * {el.price}đ

                  </div>
                  <div className='cart-on-display-item-function'>
                    <button className='cart-on-display-item-add' onClick={() => handleAddProduct(el)}>+</button>
                    <button className='cart-on-display-item-remove' onClick={() => handleRemoveProduct(el)}>-</button>
                  </div>
                </div>
              </div>
            ))}
            <div className='cart-on-display-total-price'>
              Total Price : {totalPrice}đ
            </div>
            <div className='cart-on-display-checkout'> 
              <button >Check Out</button>
            </div>
          </div>

        )}

      </div>





    </div>
  )
}

export default Header