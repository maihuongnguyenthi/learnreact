import { useEffect, useState } from "react";
//Phân biệt useEffect và useLayoutEffect
//useEffect
//1. Cập nhật lại state
//2.Cập nhật DOM (mutated)
//3.Render lại UI
//4. Gọi cleanup nếu deps thay đổi
//5. gọi useEffect callback()

//useLayoutEffect
//1. Cập nhật lại state
//2.Cập nhật DOM (mutated)
//3.Gọi cleanup nếu deps thay đổi(sync)
//4. gọi useLayoutEffect callback(sync)
//5.Render lại UI

const lessons = [
    {
        id: 1,
        name: 'name 1',
    },
    {
        id: 2,
        name: 'name 2',
    },
    {
        id: 3,
        name: 'name 3',
    },
]

const LearnUseEffectChatApp = () => {
    const [lessonId, setLessonId] = useState(1)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }, [lessonId])

    //Chỗ này nên sử dụng useLayoutEffect()
    useEffect(() => {
        if (count > 3) {
            setCount(0)
        }
    }, [count])

    return (
        <>
            <h1>learn-useEffect-chat-app</h1>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{ color: lessonId === lesson.id ? 'red' : '#333' }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button>
        </>
    )
};

export default LearnUseEffectChatApp;