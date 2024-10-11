import { useEffect, useState } from "react";
//

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

    useEffect(() => {
        const handleComment = ({ detail }) => {
            console.log(detail)
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }, [lessonId])

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

        </>
    )
};

export default LearnUseEffectChatApp;