import React, { useState, useEffect } from 'react';

const imgMenuAuth = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_2_feqlix.png';
const linkedin = 'https://www.linkedin.com/in/alexis-graff-front-end';

export const MenuChat = () => {
    return (
        <div className="menu-chat">
            <nav>
                <li><a href="src/auth/components/menuAuth/MenuAuth.jsx#">SOUND: ON</a></li>
                <li><a href="src/auth/components/menuAuth/MenuAuth.jsx#">THEME: DARK</a></li>
                <li><a target="_blank" href={ linkedin }>CONTACT ME</a></li>
            </nav>
            <img src={ imgMenuAuth } alt="Menu"/>
        </div>
    );
};
