import { useEffect, useState } from "react";
import React from 'react';
import { socket, SocketContext } from "./SocketContext.jsx";


export const SocketsProvider = ( { children } ) => {
    const [ allMessages, setAllMessages ] = useState( [] );

    useEffect( () => {
        socket.on( 'allMessages', ( data ) => {
            setAllMessages( data );
        } );
    }, [] );

    socket.on( "receive_msg", ( data ) => {
        setAllMessages( [ ...allMessages, data ] );
    } );

    const sendMessage = ( data ) => {
        socket.emit( 'send_msg', data );
    }

    return (
        <SocketContext.Provider value={ { allMessages, sendMessage
        } }>
            { children }
        </SocketContext.Provider>
    )
}
