import React, { useState, useEffect, useContext, useRef } from 'react';
import { SendMessages, ShowMessages } from "./components/index.js";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { SocketContext } from "./context/SocketContext.jsx";
import { MenuChat } from "./components/menuChat/MenuChat";
import { data } from "./data/data.js";

export const ChatContainer = () => {
    const { handleSubmit, register, control } = useForm();
    const { username } = useSelector( state => state.auth );
    const { sendMessage } = useContext( SocketContext );
    const { chatBoxImg } = data();

    const handleKeyPress = ( e, ref ) => {
        if ( e.key === 'Enter' && !e.shiftKey ) {
            e.preventDefault()
            ref.current.click();
        }
    }

    const onSubmit = ( data, e ) => {
        const message = {
            username,
            message: data.message
        }
        sendMessage( message )
        e.target.reset();
    }

    return (

        <div className="container-chat">
            <ShowMessages
                image={ chatBoxImg }
            />
            <SendMessages
                handleKeyPress={ handleKeyPress }
                handleSubmit={ handleSubmit }
                onSubmit={ onSubmit }
                username={ username }
                register={ register }
            />
            <MenuChat/>
        </div>


    );
};
