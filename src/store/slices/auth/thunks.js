import { checkAuthState } from "./authSlice.js";
import { chatApi } from "../../../hooks/useAxios/chatApi.js";

export const getAuth = () => {
    return async ( dispatch ) => {
        const { data } = await chatApi.get( '/auth' );
        dispatch( checkAuthState( { status: data.status, username: data.username } ) );
    }
}

