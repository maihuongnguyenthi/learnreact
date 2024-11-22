import video1 from "../videos/video1.mp4";
import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const Video = (props, ref) => {
    const videoElement = useRef();

    useImperativeHandle(ref, () => ({
        play: () => {
            videoElement.current.play();
        },
        pause: () => {
            videoElement.current.pause();
        }
    }));

    return <video ref={videoElement} src={video1} width={700} height={500} />;
};

export default forwardRef(Video);