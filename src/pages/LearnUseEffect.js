
import { useEffect, useState } from "react";
//Có 3 trường hợp [,[],[dependence]]
//Quy tắc chung Nó sẽ đc gọi lạ khi mounted vào dom
//1. gọi lại khi re-render (VD: gọi hàm setState())
//2. gọi lại 1 lần đầu thoi sau khi mounted vào dom
//3. gọi lại khi giá trị phụ thuộc thay đổi
//Cleanup function nó luốn đc gọi trước khi component unmount

const tabs = ['posts', 'comments', 'albums']

const LearnUseEffect = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [item, setItem] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
            //setShowGoToTop(window.scrollY >= 200)
        }

        window.addEventListener('scroll', handleScroll)
        //cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        //cleanup function
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    }, [])

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
            {showGoToTop &&

                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            }
            <h1>{width}</h1>
        </>
    )
};

export default LearnUseEffect;