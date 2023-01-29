import React, { useState, useEffect } from 'react';
import { chatApi } from "./chatApi.js";

export const useAxiosGet = (url) => {
    const [ stateGet, setStateGet ] = useState({
        data: null,
        isLoading: false,
        hasError: null,
    })

    const chatApiGet = async() => {
        try {
            setStateGet( {
                ...stateGet,
                isLoading: true
            } );
            const { data } = await chatApi.get( url );
            setStateGet( {
                isLoading: false,
                data,
                hasError: null
            } );
        } catch ( err ) {
            setStateGet( {
                data: null,
                isLoading: false,
                hasError: err
            } )
        }
    }

    return {
        chatApiGet,
        stateGet
    }
};
