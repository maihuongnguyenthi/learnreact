import { useEffect, useState } from "react";
//Closure
//Timers: setInterval,setTimeout,clearInterval,clearTimeout
//Cleanup function luôn đc gọi lại trước khi callback đc gọi (trừ lần mounted đầu tiên )


const LearnUseEffectClosure = () => {
    const [countdown, setCountdown] = useState(200)
    const [show, setShow] = useState(false)
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountdown(prev => prev - 1)
        }, 1000)
        return () => clearInterval(timerId)
    }, [countdown])

    useEffect(() => {
        return ()=>{
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handleChangeAvatar = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setAvatar(file)
    }
    return (
        <>
            <h1>learn-useEffect Closure</h1>
            <button onClick={() => setShow(!show)} >show</button>
            <h1>{show && countdown}</h1>

            <input
                type="file"
                onChange={handleChangeAvatar}
            />
            {avatar && <img src={avatar.preview} alt="Mai huong" />}
        </>
    )
};

export default LearnUseEffectClosure;