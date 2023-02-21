import React from 'react'
import { useEffect,useState } from 'react'
import "./style.css"
import Product from '../Product'

const ListProducts = () => {

  const [products,setProducts] = useState([]); // set

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
      const res = await fetch('https://fakestoreapi.com/products'); // fetch
      const data = await res.json(); // parse json
      console.log(data); 
      setProducts(data); // update
    }

  return (
    <div className='ListProducts_wrapper'>
      
    {products.map((el,index) => (
      <Product key={index}  element = {el}/>
    ))}

    </div> 
  )
}

export default ListProducts