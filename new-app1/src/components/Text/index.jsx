import { useState } from "react";
import "./style.css"

import React from 'react'

export const Text = () => {
    const colors = ["red", "blue", "orange", "purple"]
    const [color, setColor] = useState(0);
    const shapes = ["50%", "0",]
    const [shape, setShape] = useState(0);
    

    const handleChangeText = () => {
        if(color === 3){
            setColor(0)
        }
        else {
            setColor(color + 1)
            
        }
    }
    const handleChangeShape = () => {
        if(shape === 1){
            setShape(0)
        }
        else {
            setShape(shape + 1)
            
        }
    }
    return (
        <div>
            <div className='text'style={{color: colors[color] }}>Text</div>
            <div className="shape" style={{borderRadius : shapes[shape]}}></div>
            <button onClick={handleChangeText}>Change Color</button>
            <button onClick={handleChangeShape}>Change Shape</button>
        </div>
    )
}
export default Text
