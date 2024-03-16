import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            const currentMode = state.darkMode == 'light' ?  'dark': 'light'
            state.darkMode = currentMode
            localStorage.setItem('darkMode', currentMode)
        },
        initTheme(state) {
          const current = localStorage.getItem('darkMode')
          if(current) {
            state.darkMode = current
          }  
        }
    }
})

export const { toggleTheme, initTheme } =  themeSlice.actions

export default themeSlice.reducer