import React from 'react';

const leftTopCircle = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_9_v3jrfl.png';
const rightBottomCircle = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_10_evfiib.png';
const rightTopCircle = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674089350/chat/Vector_11_vzeoi6.png';

export const Circles = () => {
    return (
        <>
            <img className="leftTop" src={leftTopCircle} alt="circle"/>
            <img className="rightBottom" src={rightBottomCircle} alt="circle"/>
            <img className="rightTop" src={rightTopCircle} alt="circle"/>
        </>
    );
};
