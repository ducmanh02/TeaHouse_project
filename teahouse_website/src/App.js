import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/front/Footer/Footer';
import Home from "./components/Home";
import Admin from "./components/Admin";
import Admin_product from "./components/Admin/quan_ly_product";
import Admin_user from "./components/Admin/quan_ly_user"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  return (
    <div className="App">
      
      
      <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/đăng nhập" element={<Signin getname={getname}/>} /> */}
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Admin/user" element={<Admin_user />} />
          <Route path="/Admin/product" element={<Admin_product/>} />
          {/* <Route path="/đăng ký" element={<Signup   />} /> */}
        </Routes>

      
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default App;
