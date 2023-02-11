import React from 'react'
import "./style.css"
const Shape = ({type , backgroundColor}) => {
  return (
    <div className='shape_main' style={{
        backgroundColor: backgroundColor ,
        borderRadius : type === "circle" ? "50%" : "0"
        }}>
        
    </div>
  )
}

export default Shape