import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, FormGroup, FormControl, Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const data = {
    username: "",
    password: "",
    confirmpassword: "",
  };
  
function Signup() {
    const [user, setUser] = useState([]);
    const [person, setPerson] = useState(data);
    const { username, password, confirmpassword, isadmin } = person;
    const handerclick = (el) => {
      el.preventDefault();
      const finduser = user.find((el) => username === el.username);
      console.log(!finduser);
      if (!username || !password || !confirmpassword)
        return toast.error("nhap day du thong tin");
      if (confirmpassword !== password) return toast.error("xem lai mat khau");
      if (!finduser === false) return toast.error("tai khoan da ton tai");
      else {
        const newuser = {
          username: username,
          password: password,
          isadmin: isadmin,
        };
  
        
        // navigate("/đăng nhập");
  
        localStorage.setItem("user", JSON.stringify([...user, newuser]));
        toast.success ("dang ky thanh cong")
      }
    
    };
    useEffect(() => {
      setUser(
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : []
      );
    }, []);
    return (
    <div>      
        <img
    src="http://localhost:3000/static/media/slider_1.65f698ae20b8d594f75a.webp"
    alt="slide"
  ></img>
  <Modal show={true}>
  <Modal.Header >
          <Modal.Title>Đăng ký</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <FormGroup>
              <Form.Label>Tài khoản</Form.Label>
              <FormControl type="Tài khoản" placeholder="Tài khoản"    onChange={(el) =>
              setPerson({ ...person, username: el.target.value })
            } />
            </FormGroup>

            <FormGroup>
              <Form.Label>Mật khẩu</Form.Label>
              <FormControl type="password" placeholder="Mật khẩu"    onChange={(el) =>
              setPerson({ ...person, password: el.target.value })
            }/>
            </FormGroup>
            <FormGroup>
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <FormControl type="password" placeholder="Mật khẩu"  onChange={(el) =>
              setPerson({ ...person, confirmpassword: el.target.value })
            }/>
            </FormGroup>
            <FormGroup>
              <Form.Text onClick={()=>{
              
                
              }} style={{fontSize:"20px"}}><Link to="/">Đã có tài khoản click vào đây tiến đến đăng nhập</Link></Form.Text>
            </FormGroup>
          </Form>
            </Modal.Body>
            <Modal.Footer>

          <Button variant="primary"  onClick={handerclick}>
            Đăng Ký
          </Button>
        </Modal.Footer>
  </Modal>
  </div>
  )
}

export default Signup