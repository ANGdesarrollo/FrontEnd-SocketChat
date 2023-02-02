import React, { useState, useEffect, useContext, useRef } from 'react';
import { SendMessages, ShowMessages } from "./components/index.js";
import { useWindowSize } from "react-use";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { SocketContext } from "./context/SocketContext.jsx";
import { MenuChat } from "./components/menuChat/MenuChat";

const imageDesktop = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674147322/chat/chatBox_wfisdy.png';
const imageMobile = 'https://res.cloudinary.com/dwz16rstr/image/upload/v1674222499/chat/VerticalChatBox_pubhzi.png';

export const ChatContainer = () => {
    const [ image, setImage ] = useState( '' );
    const { width } = useWindowSize();
    const { handleSubmit, register, control } = useForm();
    const { username } = useSelector( state => state.auth );
    const { sendMessage } = useContext( SocketContext );

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

    useEffect( () => {
        if ( width > 992 ) setImage( imageDesktop );
        if ( width < 992 ) setImage( imageMobile );
    }, [ width ] );

    return (

        <div className="container-chat">
            <ShowMessages
                image={ image }
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
