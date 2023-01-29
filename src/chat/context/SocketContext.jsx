import io from "socket.io-client";
import { API_URL } from "../../config/configAPI.js";
import { createContext } from "react";

export const socket = io( API_URL, {
    withCredentials: true,
    extraHeaders: {
        "my-custom-header": ''
    }
} );

export const SocketContext = createContext( { socket } );
