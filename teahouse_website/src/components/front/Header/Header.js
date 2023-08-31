import React from 'react'
import "./Style.css"
import { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Logo from '../../../assets/img/logo_white.webp'
import { Link } from 'react-router-dom'
import {FaUserAlt} from 'react-icons/fa'

const Header = ({ cartItems, handleAddProduct, handleRemoveProduct }) => {
  const [displayCart, setDisplayCart] = useState(false);
  const [displayACcount, setDisplayACcount] = useState(false)

  const totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0)
  const TotalQuantity = cartItems.reduce((TotalQuantity, item) => TotalQuantity + item.quantity, 0);

  return (
    <div className='header-main'>

      <div className='header-top'>
      <div className='header-number'>
          <p>HOTLINE : 1900 1234</p>
        </div>
        <div className='header-LOGO'>
          <img src={Logo} alt=''></img>
        </div>

        <div className='header-right'>
          <div className='header-account'>
            <p onClick={() => setDisplayACcount(!displayACcount)}><FaUserAlt style={{'padding' : '0 5px 3px 0','font-size':'20px'}}/>Tài Khoản</p>
          </div>
          {displayACcount && (
            <div className='header-sign'>
              <div className='header-sign-up'><a href='/Admin'>Đăng Ký</a></div>
              <div className='header-sign-in'><a href=''> Đăng Nhập</a></div>
            </div>
          )}
          <div>
            <AiOutlineShoppingCart className='header-icon-shopping-cart' onClick={() => setDisplayCart(!displayCart)} />
            <span className='total-quantity-item'> {TotalQuantity}</span>
          </div>

        </div>
      </div>


      <div className='cart-on-display'>
        {displayCart && (
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
            {cartItems.length === 0 ? (
              <div className='cart-on-display-item'> NoThing In Your Cart</div>
            )
              :
              (
                <div>
                  <div className='cart-on-display-total-price'>
                    Total Price : {totalPrice}đ
                  </div>
                  <div className='cart-on-display-checkout'>
                    <button >Check Out</button>
                  </div>
                </div>
              )
            }

          </div>

        )}

      </div>





    </div>
  )
}

export default Header