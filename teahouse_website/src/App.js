import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./components/Home";
import Admin from "./components/Admin";
import Admin_product from "./components/Admin/quan_ly_product";
import Admin_user from "./components/Admin/quan_ly_user";
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
   const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  const handleAddProduct = (product) => {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    
    if(ProductExits) {
      setCartItems(cartItems.map((item) => item.id ===product.id?
      {...ProductExits, quantity: ProductExits.quantity + 1} : item));
    
    }
    else {
      setCartItems([...cartItems,{...product, quantity: 1}]);
    }
    }

    const handleRemoveProduct = (product) => {
      const ProductExits = cartItems.find((item) => item.id === product.id);
      if(ProductExits.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id!== product.id)); // remove item from cart
      }
      else {
        setCartItems(cartItems.map((item) => item.id ===product.id? 
        {...ProductExits, quantity: ProductExits.quantity - 1} : item));// update quantity
      }
    }

  return (
    <div className="App">
      
      
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>} />
          {/* <Route path="/đăng nhập" element={<Signin getname={getname}/>} /> */}
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/user" element={<Admin_user />} />
          <Route path="/Admin/product" element={<Admin_product/>} />
          {/* <Route path="/đăng ký" element={<Signup   />} /> */}
        </Routes>

      
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
