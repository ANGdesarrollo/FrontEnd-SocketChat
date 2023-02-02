import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../../store/slices/auth/index.js";
import { handleSong } from "../../../store/slices/song/index.js";
import { handleTheme } from "../../../store/slices/theme/index.js";
import { data } from "../../data/data.js";
import { useTheme } from "../../../hooks/useTheme/useTheme.js";

const imgMenu = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_2_feqlix.png';
const linkedin = 'https://www.linkedin.com/in/alexis-graff-front-end';

export const MenuChat = () => {
    const { theme } = useSelector( state => state.theme );
    const { isPlaying } = useSelector( state => state.song );
    const dispatch = useDispatch();
    const { letterMenu } = useTheme()

    let themeActive = theme === 'Dark' ? 'DARK' : 'LIGHT';
    let templateSound = isPlaying ? 'ON' : 'OFF'

    return (
        <div className="menu">
            <nav>
                <li><a style={{color: letterMenu}}  onClick={ () => dispatch( handleSong() ) } href="#">SOUND: { templateSound }</a></li>
                <li onClick={() => dispatch( handleTheme() ) }><a style={{color: letterMenu}}   href="#">THEME: { themeActive }</a></li>
                <li ><a style={{color: letterMenu}}  target="_blank" href={ linkedin }>CONTACT ME</a></li>
                <li id="logout" onClick={ () => dispatch( onLogout() ) }><a>LOGOUT</a></li>
            </nav>
            <img src={ imgMenu } alt="Menu"/>
        </div>
    );
};
