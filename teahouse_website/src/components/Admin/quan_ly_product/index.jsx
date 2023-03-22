import React from "react";
import "./style.css";
import { useEffect, useState } from "react";
  import Button from "react-bootstrap/Button";
  import Form from "react-bootstrap/Form";
  import Modal from "react-bootstrap/Modal";
  import "bootstrap/dist/css/bootstrap.min.css";

function Admin_product() {
  const [productcorrec, setProductcorrec] = useState({});
  const [correc, setCorrec] = useState({
    image: "",
    title: "",
    price: "",
    id: "",
  });
  const [show, setShow] = useState(false);
  const [showadd, setShowadd] = useState(false);
  const [listproduct, setListProduct] = useState([]);
  const [product, setProduct] = useState({
    image: "",
    title: "",
    price: "",
    id: parseInt(Date.now()),
  });
  const save = () => {
    const indexcorrec = listproduct.findIndex(
      (el) => el.id === productcorrec.id
    );
    listproduct.splice(indexcorrec, 1, correc);
    localStorage.setItem("product", JSON.stringify(listproduct));
    setListProduct(listproduct);
    setShow(false);
  };
  const handleClose = () => {
    setShow(false);
    setShowadd(false)
  }
  const handsave = (el) => {
    setProductcorrec(el);
    // setCorrec((prev) => ({ ...prev, id: el.id }));
    setCorrec({...correc,id:el.id})
    setShow(true);
  };
  const add=()=>{
    setShowadd(true)
  }
  const handeradd = (el) => {
    setProduct({ ...product, id: parseInt(Date.now()) });
    setListProduct([...listproduct, product]);
    localStorage.setItem("product", JSON.stringify([...listproduct, product]));
  };
  const handerdelete = (id) => {
    const productdelete = listproduct.filter((el) => el.id !== id);
    localStorage.setItem("product", JSON.stringify(productdelete));
    setListProduct(productdelete);
  };
  useEffect(() => {
    setListProduct(
      localStorage.getItem("product")
        ? JSON.parse(localStorage.getItem("product"))
        : []
    );
  }, []);
  return (
    <div>
       <Button style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}} onClick={add}>ADD</Button>
      {listproduct.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <td>Id</td>
              <td>Image</td>
              <td>Title</td>
              <td>Price</td>
              <td>sửa</td>
              <td>xóa</td>
            </tr>
          </thead>
          <tbody>
            {listproduct.map((el, index) => (
              <tr key={el.id}>
                <td>{el.id}</td>
                <td>
                  <img src={el.image} alt=""></img>
                </td>
                <td>{el.title}</td>
                <td>{el.price}</td>
                <td>
                  <Button variant="primary" onClick={() => handsave(el)}>
                    Sửa
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => handerdelete(el.id)}>
                    delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>No User</h1>
      )}
      {/* /======modal=====/ */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sửa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                autoFocus
                onChange={(el) =>
                  setCorrec({ ...correc, image: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setCorrec({ ...correc, title: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setCorrec({ ...correc, price: el.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showadd} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image</Form.Label>
              <Form.Control
                autoFocus
                onChange={(el) =>
                  setProduct({ ...product, image: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setProduct({ ...product, title: el.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Price</Form.Label>
              <Form.Control
                onChange={(el) =>
                  setProduct({ ...product, price: el.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handeradd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin_product;