import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from 'react';

export const songSlice = createSlice( {
    name: 'song',
    initialState: {
        isPlaying: false
    },
    reducers: {
        handleSong: ( state ) => {
            state.isPlaying = !state.isPlaying
        }
    }
} );

export const { handleSong } = songSlice.actions;
