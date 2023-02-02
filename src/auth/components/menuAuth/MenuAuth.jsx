import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleSong } from "../../../store/slices/song/index.js";
import { handleTheme } from "../../../store/slices/theme/index.js";

const imgMenuAuth = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_2_feqlix.png';
const linkedin = 'https://www.linkedin.com/in/alexis-graff-front-end';

export const MenuAuth = () => {
    const { theme } = useSelector( state => state.theme );
    const { isPlaying } = useSelector( state => state.song );
    const dispatch = useDispatch();

    let templateSound = isPlaying ? 'ON' : 'OFF';
    let themeActive = theme === 'Dark' ? 'DARK' : 'LIGHT';

    return (
        <div className="menu">
            <nav>
                <li><a onClick={ () => dispatch( handleSong() ) } href="#">SOUND: { templateSound }</a></li>
                <li onClick={ () => dispatch( handleTheme() ) }><a href="#">THEME: { themeActive }</a></li>
                <li><a target="_blank" href={ linkedin }>CONTACT ME</a></li>
            </nav>
            <img src={ imgMenuAuth } alt="Menu"/>
        </div>
    );
};
