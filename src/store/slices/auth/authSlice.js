import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from 'react';

export const authSlice = createSlice( {
    name: 'auth',
    initialState: {
        status: false,
        username: null,
        done: false,
    },
    reducers: {
        checkAuthState: ( state, action ) => {
            state.status = action.payload.status
            state.username = action.payload.username
            state.done = true
        },
        setAuthState: ( state, action ) => {
            state.status = action.payload.status
            state.username = action.payload.username
            state.done = true
        },
        logout: (state, action) => {
            state.status = action.payload.status
            state.username = action.payload.username
        }
    }
} );

export const { checkAuthState, setAuthState, logout } = authSlice.actions;
