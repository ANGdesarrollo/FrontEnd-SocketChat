import React, { useEffect, useRef } from 'react';
import Audio from '../../assets/audio.mp3';
import { useSelector } from "react-redux";

export const Music = () => {
    const { isPlaying } = useSelector( state => state.song );
    const refSong = useRef();

    useEffect( () => {
        if ( isPlaying ) refSong.current.play();
        if ( !isPlaying ) refSong.current.pause();
    }, [ isPlaying ] )

    return (
        <div className="audio">
            <audio loop={ true } src={ Audio } controls={ false } ref={ refSong }/>
        </div>
    );
};
