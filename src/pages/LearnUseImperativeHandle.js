import {useRef } from "react";
import Video from "./Video";

function LearnUseImperativeHandle() {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();
    }

    return (
        <div style={{ padding: 20 }} className="">
            <h1>Mai huong</h1>
            <Video ref={videoRef} />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    );
}

export default LearnUseImperativeHandle;
