import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import { useTheme } from "../../hooks/useTheme/useTheme.js";

const darkTheme = 'https://res.cloudinary.com/dwz16rstr/video/upload/v1671584240/chat/Estrellas_-_82360_1_cizubt.mp4'
const lightTheme = 'https://res.cloudinary.com/dwz16rstr/video/upload/v1675364844/chat/Terreno_-_66975_jznvz7.mp4'

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
