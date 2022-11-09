import { useState, useEffect } from "react"
export const PostList = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {//this will fire on every change
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => console.log(err))
    },[])
    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>{post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}