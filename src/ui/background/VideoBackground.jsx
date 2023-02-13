import React, { useEffect, useRef } from 'react';
import darkTheme from '../../../public/videos/dark.mp4';
import lightTheme from '../../../public/videos/light.mp4';
import { useTheme } from "../../hooks/useTheme/useTheme.js";

export const VideoBackground = () => {
    const { animationTheme, theme } = useTheme();
    const ref = useRef( null );

    useEffect( () => {
        animationTheme( ref )
    }, [ theme ] );


    return (
        <video ref={ ref } className="video-background"
               loop
               autoPlay
               muted
               src={ theme === 'Dark' ? darkTheme : lightTheme }>
        </video>
    );
};
