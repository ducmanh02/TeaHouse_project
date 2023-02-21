import React from 'react'

import { useState } from 'react'

const gifts = [
    'cpu',
    'ram',
    'keyboard',
    'mouse'
]

const Gift = () => {
    const [gift, setGift] = useState()

    const randomGift = () => {
        
        setGift(gifts[Math.floor(Math.random() * gifts.length)])
    }
    
    
  return (
    <div>
        <h1>{gift || 'Chua co phan thuong'}</h1>
        <button onClick={randomGift}>Random Gift</button>
        
    </div>
  )
}

export default Gift