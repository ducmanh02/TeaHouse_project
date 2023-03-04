import React from 'react'
import {  useReducer } from 'react'

//useReducer
//1. initial state
//2. Action: up (state +1 ) down (state -1)
//3. Reducer
//4.Dispatch

//1. initial state
const initState = 0

//2.Action
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//reducer
const reducer = (state, action) =>{
    console.log('reducer is running');
    switch(action) {
        case 'up':
            return state + 1
        case 'down':
            return state - 1
        default:
            throw new Error('Invalid action')    
    }
}

const USEREDUCER = () => {
    const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{padding : '0 20px'}}>
        <h1>{count}</h1>
        <button
            onClick={() => dispatch('down')}
        >DOWN</button>
        <button
            onClick={() => dispatch('up')}
        >UP</button>
    </div>
  )
}

export default USEREDUCER