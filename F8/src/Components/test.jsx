import { useEffect, useState } from "react";

const tabs = [
    'posts','comments', 'albums', 'photos', 'todos', 'users'
]

function Test () {
    // state of title
    const [title, setTitle] = useState('');
    //state of posts callApi 
    const [posts, setPosts] = useState([]);
    //state of btn call value of API
    const [type, setType] = useState('posts');
    //set the title by the value of input
    const handleInput = (e) => {
        setTitle(e.target.value);
    }
    const [showGoToTop, setShowGoToTop] = useState(false);


    //useEffect(callback,[]) to re-render while deps change

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json()) //res dc chuyen ve dang json

            .then(posts => setPosts(posts)) //  set : posts la response cua callApi

    }, [type])

    //
    useEffect(()=>{
        const handleScroll = () =>{
            if(window.scrollY > 200){
                setShowGoToTop(true)
            }
            else {
                setShowGoToTop(false)
            }

        }
    
      window.addEventListener('scroll',handleScroll)  
        return () =>{
            console.log('unmount')
            window.removeEventListener('scroll',handleScroll)
        }
    }, [])

    return (
        <div>
            {tabs.map(tab =>(
                <button 
                   key = {tab}
                   onClick = {() => setType(tab)}
                   style = {type === tab ? {
                        color :'#fff',
                        backgroundColor :'#333',    
                   } : {} }
                >
                    {tab}
                </button>
            ))}
            <input 
                value ={title}
                onChange = {handleInput}
            />
            <ul>
                {posts.map(posts =>(
                    <li key = {posts.id}>
                        {posts.title || posts.name}
                    </li>
                ))}
            </ul>
            {showGoToTop &&(
                <button
                    style={{
                        position : 'fixed',
                        right : 20,
                        bottom : 20
                    }}
                    onClick = {() => window.scrollTo({ top : 0, behavior : 'smooth'})}
                >
                   <h3>GO TO TOP</h3>
                </button>
            )}
        </div>
    )



}

export default Test;