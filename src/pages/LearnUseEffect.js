
import { useEffect, useState } from "react";
//Có 3 trường hợp [,[],[dependence]]
//Quy tắc chung Nó sẽ đc gọi lạ khi mounted vào dom
//1. gọi lại khi re-render (VD: gọi hàm setState())
//2. gọi lại 1 lần đầu thoi sau khi mounted vào dom
//3. gọi lại khi giá trị phụ thuộc thay đổi


const LearnUseEffect = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        document.title = title
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [])
    return (
        <>
            <h1>learn-useEffect</h1>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    )
};

export default LearnUseEffect;