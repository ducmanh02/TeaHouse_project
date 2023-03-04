import React from 'react'
import { useState, useEffect } from 'react'

const lessons = [
    {
      id: 1,
      name: "React"
    },
    {
      id: 2,
      name: "Ruby"
    },
    {
      id: 3,
      name: "React"
    }
  ];

const FakeChatApp = () => {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        
        const handleComment = (e) => {
            console.log(e.detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        };
        

    }, [lessonId])



  return (
    <div>
        <ul>
            {lessons.map((lesson) => (
                <li
                    key={lesson.id}
                    
                    style={{ color : lessonId === lesson.id ? "red" : "black" , cursor : "pointer" }}

                    onClick={() => setLessonId(lesson.id)}
                    
                >
                    {lesson.name}

                </li>
            ))}
        </ul>

    </div>
  )
}

export default FakeChatApp