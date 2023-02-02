import { createSlice } from "@reduxjs/toolkit";
import React, { useEffect } from 'react';

export const themeSlice = createSlice( {
    name: 'theme',
    initialState: {
        theme: 'Dark'
    },
    reducers: {
        handleTheme: ( state ) => {
            switch ( state.theme ) {
                case "Dark":
                    state.theme = 'Light'
                    break
                case "Light":
                    state.theme = 'Dark'
                    break
            }
        }
    }
} );

export const { handleTheme } = themeSlice.actions;
