import React, { useState, useEffect } from 'react';
import { chatApi } from "./chatApi.js";

export const UseAxiosDelete = () => {
    const [ state, setState ] = useState({
        data: null,
        isLoading: false,
        hasError: null,
    })

    const chatApiDelete = (path) => {
        setState({
            ...state,
            isLoading: true
        })
        chatApi.delete(path)
            .then(({data}) => {
                setState({
                    ...state,
                    data,
                    hasError: null
                })
            } )
            .catch((err) => {
                setState({
                    ...state,
                    hasError: err
                })
            })
            .finally(() => setState({
                ...state,
                isLoading: false
            }))
    }
    return {
        chatApiDelete,
        state
    };
};
