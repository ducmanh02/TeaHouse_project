import React, { useState } from 'react'
import "./style.css"

const Button = ({backgroundColor = 'green',text = 'Success'}) => {
  const [isSwitch, setIsSwitch] = useState(false);

  const handleChange = () => {
    setIsSwitch(!isSwitch);
    if(isSwitch){
      
    }
  }
  return (
    <button onClick={handleChange} className='btn' style={
        {
            backgroundColor: backgroundColor
        
        }
    }>
        {text}
    </button>
  )
}

export default Button