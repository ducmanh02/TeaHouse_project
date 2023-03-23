import React from 'react'
import "./Style.css"
import { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Logo from '../../../assets/img/logo_white.webp'
import { FaUserAlt } from 'react-icons/fa'
import { toast } from 'react-toastify';
import { Form, FormGroup, FormControl, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = ({ cartItems,setCartItems, handleAddProduct, handleRemoveProduct }) => {
  const [show,setShow]=useState(false)
  const [displayCart, setDisplayCart] = useState(false);
  const [displayACcount, setDisplayACcount] = useState(false)
  const [showname,setShowname]=useState(false)
  const [name,setName]=useState()
  const totalPrice = cartItems.reduce((price, item) => price + item.price * item.quantity, 0)
  const TotalQuantity = cartItems.reduce((TotalQuantity, item) => TotalQuantity + item.quantity, 0);
  // xu ly modal dang nhap
  const handerclose=()=> setShow(false)
const handersignin=()=>{
  setShow(true)
  //xu ly dang nhap

}
const users =JSON.parse(localStorage.getItem('user'))

const [person, setPerson] = useState({
  username: "",
  password: "",
});
const { username, password } = person;

const handerout=()=>{
  setShowname(false)
}
const handerclick = (el) => {
  el.preventDefault();
  if (!username || !password) return toast.error("nhap day du thong tin");
  const finduser=users.find((el)=>el.username===username&&el.password===password);

  if(finduser===undefined){
    toast.error(`tai khoan ${username} khong ton tai`)
  }
  else 
  {
    console.log(username);
    setName(username)
    setShowname(true)
    setDisplayACcount(false)
        toast.success(`dang nhap thanh cong`)
       setShow(false)
  }
};
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
            {showname?<div>
              <p>Xin Chào {name}</p>
              <p onClick={handerout}>Đăng Xuất</p>
            </div>:<p onClick={() => setDisplayACcount(!displayACcount)}><FaUserAlt style={{ 'padding': '0 5px 3px 0', 'fontSize': '20px' }} />Tài Khoản</p>}
          </div>
          {displayACcount && (
            <div className='header-sign'>
              
              <div className='header-sign-up'><a href='/Signup'>Đăng ký</a></div>
              <div className='header-sign-in' onClick={handersignin}><a> Đăng Nhập</a></div>
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
                  <div className='cart-on-display-button'>
                    <div className='cart-on-display-checkout'>
                      <button >Check Out</button>
                    </div>
                    <div className='cart-on-display-clear'>
                      <button onClick={() => {setCartItems([]);toast.success('Removed',{position : toast.POSITION.TOP_CENTER})}} >Clear All</button>
                    </div>
                  </div>
                </div>
              )
            }

          </div>

        )}

      </div>
<Modal show={show} onHide={handerclose}>
<Modal.Header closeButton={handerclose}>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FormGroup>
              <Form.Label>Tài khoản</Form.Label>
              <FormControl type="Tài khoản" placeholder="Tài khoản"               onChange={(el) =>
                setPerson({ ...person, username: el.target.value })
              }/>
            </FormGroup>

            <FormGroup>
              <Form.Label>Mật khẩu</Form.Label>
              <FormControl type="password" placeholder="Mật khẩu"  onChange={(el) =>
                setPerson({ ...person, password: el.target.value })
              } />
            </FormGroup>
            <FormGroup>
              <Form.Text onClick={()=>{

              }} style={{fontSize:"20px"}}><a href='/Signup' >Chưa có tài khoản bạn có thể click vào đây để đăng ký</a></Form.Text>
            </FormGroup>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handerclick} >
            Đăng nhập
          </Button>
        </Modal.Footer>
</Modal>
    </div>
  )
}

export default Header