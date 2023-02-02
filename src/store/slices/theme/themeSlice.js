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
                    localStorage.setItem('theme', 'Light')
                    break
                case "Light":
                    state.theme = 'Dark'
                    localStorage.setItem('theme', 'Dark')
                    break
            }
        },
        handleLocalStorage: (state) => {
            const data = localStorage.getItem('theme');
            if(data) {
                state.theme = data;
            }
        }
    }
} );

export const { handleTheme, handleLocalStorage } = themeSlice.actions;
