import React from 'react'
import { useState, useEffect } from 'react'


const TimerF = () => {
    const [countdown,setCountdown] = useState(180)
    

    useEffect (() => {
        const timeID = setInterval(() => {
            setCountdown( prevState => prevState - 1)
            console.log("countdowning")
            
        } , 1000)
        
        return () =>{
            clearInterval(timeID)
        }
    },[])

  return (
    <div><h1>{countdown}</h1></div>
  )
}

export default TimerF