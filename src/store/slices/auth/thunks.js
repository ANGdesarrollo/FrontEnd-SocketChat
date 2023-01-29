import { checkAuthState, logout } from "./authSlice.js";
import { chatApi } from "../../../hooks/useAxios/chatApi.js";

export const getAuth = () => {
    return async ( dispatch ) => {
        const { data } = await chatApi.get( '/auth' );
        dispatch( checkAuthState( { status: data.status, username: data.username } ) );
    }
}

export const onLogout = () => {
    return async ( dispatch ) => {
        console.log( 'me llamaron' )
        const { data } = await chatApi.delete( '/logout' );
        dispatch( logout( { status: !data.status, username: data.username } ) )
    }
}

