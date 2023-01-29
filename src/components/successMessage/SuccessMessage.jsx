import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setAuthState } from "../../store/slices/auth/index.js";

const imgSuccessChat = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674677550/chat/CheckingChat_lwxun1.png';
const imgSuccessRegister = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674677550/chat/SuccessRegister_wnxz8x.png';

export const SuccessMessage = ( { path, data } ) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    let image = pathname === '/register' ? imgSuccessRegister : imgSuccessChat;

    const dispatch = useDispatch();


    useEffect( () => {
        setTimeout( () => {
            if ( pathname === '/login' ) {
                dispatch( setAuthState( { status: data.status, username: data.username } ) )
            } else {
                navigate( path )
            }
        }, 5000 )
    }, [] )

    return (
        <div className="container">
            <img className="space-rocket" src={ image } alt="Rocket space"/>
        </div>
    );
};
