import React, { useState, useEffect } from 'react';
import { chatApi } from "./chatApi.js";

export const useAxiosPost = ( url ) => {
    const [ statePost, setStatePost ] = useState( {
        data: null,
        isLoading: false,
        hasError: null,
    } );

    const chatApiPost = ( data ) => {
        setStatePost( {
            ...statePost,
            isLoading: true
        } )
        chatApi.post( url, data = { ...data }
            , { withCredentials: true } )
            .then( ( { data } ) => {
                setStatePost( {
                    hasError: null,
                    isLoading: false,
                    data,
                } );
            } )
            .catch( ( error ) => {
                console.log('entre al catch', error)
                setStatePost( {
                    data: null,
                    isLoading: false,
                    hasError: error
                } );
            } )
    }
    return {
        chatApiPost,
        statePost
    }
};
