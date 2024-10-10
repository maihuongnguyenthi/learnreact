
import { useEffect, useState } from "react";
//Có 3 trường hợp [,[],[dependence]]
//Quy tắc chung Nó sẽ đc gọi lạ khi mounted vào dom
//1. gọi lại khi re-render (VD: gọi hàm setState())
//2. gọi lại 1 lần đầu thoi sau khi mounted vào dom
//3. gọi lại khi giá trị phụ thuộc thay đổi

const tabs = ['posts', 'comments', 'albums']

const LearnUseEffect = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [item, setItem] = useState('posts')

    useEffect(() => {
        document.title = title
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${item}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [item])

    return (
        <>
            <h1>learn-useEffect</h1>
            <div>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        style={item === tab ? { color: '#333', backgroundColor: '#fff' } : {}}
                        onClick={() => setItem(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </>
    )
};

export default LearnUseEffect;