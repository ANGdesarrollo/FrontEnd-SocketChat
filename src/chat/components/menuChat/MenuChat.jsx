import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { onLogout } from "../../../store/slices/auth/index.js";

const imgMenu = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_2_feqlix.png';
const linkedin = 'https://www.linkedin.com/in/alexis-graff-front-end';

export const MenuChat = () => {
    const { isPlaying } = useSelector( state => state.song );
    const dispatch = useDispatch();

    let templateSound = isPlaying ? 'ON' : 'OFF'

    return (
        <div className="menu">
            <nav>
                <li><a href="src/auth/components/menuAuth/MenuAuth.jsx#">SOUND: {templateSound}</a></li>
                <li><a href="src/auth/components/menuAuth/MenuAuth.jsx#">THEME: DARK</a></li>
                <li><a target="_blank" href={ linkedin }>CONTACT ME</a></li>
                <li id="logout" onClick={() => dispatch(onLogout())}><a>LOGOUT</a></li>
            </nav>
            <img src={ imgMenu } alt="Menu"/>
        </div>
    );
};
