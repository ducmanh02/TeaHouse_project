import React from 'react'
import { useState, useEffect } from 'react'

const PreviewAvatar = () => {
    const [avatar,setAvatar] = useState(null)

    useEffect(() => {
        
        //clean up
        return () => {
         avatar && URL.revokeObjectURL(avatar.preview);
            
        }
    },[avatar])
    const handlePreview = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file); 
        setAvatar(file);
        
    }
  return (
    <div>
        <input 
        type="file"
        onChange={handlePreview}
        />
        {avatar && <img src={avatar.preview} alt="avatar" width="20% "/>}
        
    </div>
  )
}

export default PreviewAvatar