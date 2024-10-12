import { useState, useRef, useEffect } from "react";
//Lưu giá trị qua một tham chiếu bên ngoài

const LearnUseRef = () => {
    const [count, setCount] = useState(60)

    const TimerId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    useEffect(() => {
        const rect = h1Ref.current.getBoundingClientRect()
        console.log(rect)
    })
    const handleStart = () => {
        TimerId.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(TimerId.current)
    }
    
    console.log(count, prevCount.current)
    return <div>
        <h1 ref={h1Ref} >{count}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>;
};

export default LearnUseRef;