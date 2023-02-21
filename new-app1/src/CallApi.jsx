import React from 'react'
import {useState } from 'react'



const CallApi = () => {
    const [products, setProducts] = useState([])

    const handleCallApi = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log(response);
        const data = await response.json();
        console.log(data);
        setProducts(data);
        console.log(products);
        
    }
  return (
    <div>
        <button 
        style={{
            margin: '10px',
            padding: '10px',
            backgroundColor: 'green',
        }}
        onClick = {handleCallApi}
        >
            Click Me !!!
        </button>

        {products.map((item,index) => {
            return (
            <h1 key={item.id}> {item.title} </h1>
        )})}
    </div>
  )
}

export default CallApi