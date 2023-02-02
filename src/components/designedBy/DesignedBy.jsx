import React, { useState, useEffect } from 'react';

const pencil = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1675041051/chat/lapiz_mklmk7.png'
const linkedin = 'https://www.linkedin.com/in/mariel-torres-front-end/'

export const DesignedBy = () => {
    const [ state, setState ] = useState( false );

    setInterval(() => {
        setState(!state);
    }, 10000)

    let animation = state ? 'active-designed' : null;


    return (
        <div className={`designed ${animation}`}>
            <span>Designed by <a target="_blank" href={ linkedin }>Mariel Torres</a></span>
            <img src={ pencil } alt="pencil"/>
        </div>
    );
};
